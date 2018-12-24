import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { GoogleAuthService } from '../services/google-auth.service';
import { ChessboardComponent } from '../chessboard/chessboard.component';
import { DataService } from '../services/data.service';
import { RecordService } from '../services/record.service';
import { Record, OutputColour } from '../shared-classes/record';
import { Sequence } from '../shared-classes/sequence';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { Move } from '../chessboard/chess-enums';

class AsyncArray<T> {
	array = new Array<T>();
	ready: Promise<void>;
	resolve: (value?: void | PromiseLike<void>) => void;
	constructor() {
		this.ready = new Promise<void>((resolve) => {
			this.resolve = resolve;
		});
	}
}

@Component({
	selector: 'app-trainer',
	templateUrl: './trainer.component.html',
	styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

	public output = new Array<string>();
	public outputColour = OutputColour.blue;
	@ViewChild(ChessboardComponent) board: ChessboardComponent;
	public sequence: Sequence;
	private orderedSequences = new AsyncArray<Sequence>();
	public runningSubscription: Subscription;
	public record: Record;

	constructor(private cd: ChangeDetectorRef,
		public gauth: GoogleAuthService,
		private dataService: DataService,
		private route: ActivatedRoute,
		private recordService: RecordService) { }

	async ngOnInit() {
		// If logged into Google, look for records of previous attempts
		Promise.all(this.gauth.ready).then(() => {
			// Google Drive is ready to use
			this.generateOrderedSequences();
		});
		this.output.push('Select a sequence from the Moves page.');
		// get the parameters, if any
		this.route.paramMap.subscribe(async (params: ParamMap) => {
			let name = params.get('name');
			// Leave this because it might be useful in future:
			// console.log('showHeader: ' + params.get('header'));
			// if (params.get('header') === 'showHeader') {
			// 	this.showHeader = true;
			// } else if (params.get('header') === 'hideHeader') {
			// 	this.showHeader = false;
			// }
			if (name === undefined || name === null) {
				await this.nextSequence();
				this.runSequence();
				return;
			} else {
				this.output.length = 0;

				// Check the sequence is in the sequences data
				this.sequence = await this.dataService.findSequence(name);
				if (this.sequence === undefined) {
					this.output.push('The sequence \'' + name + '\' cant be found.');
				} else {
					this.runSequence();
				}
			}
		});

	} // end of ngOnInit

	runSequence() {
		if (this.sequence === undefined) {
			throw new Error('runSequence called without a valid sequence.');
		}
		this.board.load(this.sequence.fen);
		this.board.flipBoardTo(this.board.chess.turn);
		let successful = true;
		this.output.length = 0;
		// this.output.push(this.sequence.name);
		this.getRecord();
		let stepCount = 0;

		this.runningSubscription = <Subscription>this.board.moveMade.subscribe((move: Move) => {
			// console.log("move made: " + move.from + move.to);
			if (stepCount < this.sequence.steps.length) {
				let step = this.sequence.steps[stepCount];
				// console.log("step: " + step.move);
				if ((move.from + move.to) === step.move.from + step.move.to) {
					// Correct move
					this.board.chess.move(step.move);
					// Make the next move if there is one
					stepCount++;
					if (stepCount < this.sequence.steps.length) {
						step = this.sequence.steps[stepCount];
						this.board.chess.move(step.move);
						console.log('fen after move: ' + this.board.chess.fen);
					} else {
						this.endSequence(successful);
						return;
					}
				} else {
					this.board.chess.undo();
					this.output.push('Incorrect move. Should be '
						+ step.move.from + step.move.to);
					stepCount--;
					successful = false;
					if (this.record !== undefined) {
						this.record.mistake();
						this.recordService.addRecord(this.record);
					}
				}
				stepCount++;
				if (stepCount === this.sequence.steps.length) {
					this.endSequence(successful);
					return;
				}
			}
		});
	}

	async endSequence(successful: boolean) {
		let p = new Promise<void>(async (resolve) => {
			this.output.push('End of sequence.');
			this.runningSubscription.unsubscribe();
			// let record = await this.recordService.getRecord(this.sequence.name);
			if (this.record === undefined) {
				let now = new Date();
				let next = new Date();
				if (successful) {
					next.setDate(next.getDate() + 1);
				}
				console.log("New record. name: " + this.sequence.name
					+ ", last: " + now
					+ ", next: " + next);
				this.record = new Record(this.sequence.name, now, next);
				await this.recordService.addRecord(this.record);
				resolve();
			}
			else {
				if (successful) {
					this.record.success();
					await this.recordService.addRecord(this.record);
				}
				resolve();
			}
		});
	}

	redoSequence() {
		// console.log('redo sequence');
		if (this.runningSubscription !== undefined
			&& !this.runningSubscription.closed) {
			this.runningSubscription.unsubscribe();
		}
		this.runSequence();
	}

	async nextSequence() {
		if (this.runningSubscription !== undefined
			&& !this.runningSubscription.closed) {
			this.runningSubscription.unsubscribe();
		}
		let p = new Promise<void>(async (resolve) => {
			await this.orderedSequences.ready;
			if (this.sequence === undefined) {
				if (this.orderedSequences.array.length > 0) {
					this.sequence = this.orderedSequences.array[0];
					resolve();
					return;
				}
			}
			for (let i = 0; i < this.orderedSequences.array.length; i++) {
				let seq = this.orderedSequences.array[i];
				if (seq.name === this.sequence.name) {
					// for (let s of this.orderedSequences.array) {
					// 	console.log("nextSequence " + s.name);
					// }
					if ((i + 1) < this.orderedSequences.array.length) {
						this.sequence
							= this.orderedSequences.array[i + 1];
						this.runSequence();
						resolve();
						return;

					}
					else
						console.log("Already at last sequence.");
				}
			}
		});
		return p;
	}

	async prevSequence() {
		if (this.runningSubscription !== undefined
			&& !this.runningSubscription.closed) {
			this.runningSubscription.unsubscribe();
		}
		let p = new Promise<void>(async (resolve) => {
			// await Promise.all(this.orderedSequencesReady);
			await this.orderedSequences.ready;
			if (this.sequence === undefined) {
				if (this.orderedSequences.array.length > 0) {
					this.sequence = this.orderedSequences.array[0];
					resolve();
					return;
				}
			}
			for (let i = 0; i < this.orderedSequences.array.length; i++) {
				let seq = this.orderedSequences.array[i];
				if (seq.name === this.sequence.name) {
					if (i > 0) {
						this.sequence
							= this.orderedSequences.array[i - 1];
						this.runSequence();
						resolve();
						return;
					}
					else
						console.log("Already at first sequence.");
				}
			}
			resolve();
		});
		return p;
	}

	// Where there are some records on previous sequences, use them,
	// otherwise any order
	async generateOrderedSequences() {
		let p = new Promise<void>(async (resolve) => {
			// this.orderedSequences = new Array<Sequence>();
			await Promise.all(this.recordService.ready);
			let sql = "select * from t_records order by next";
			let results = await this.recordService.ala.execSelect(sql);
			if (results.length === 0) {
				this.output.push('No records found.');
			}
			else {
				for (let result of results) {
					let name = result['name'];
					let seq = await this.dataService.findSequence(name);
					if (seq === undefined) {
						this.output.push('The sequence \'' + name + '\' cant be found.');
					}
					else {
						this.orderedSequences.array.push(seq);
					}

				}
			}
			// Pull in any other sequences
			for (let seqA of this.dataService.sequencies) {
				let contains = false;
				for (let seqB of this.orderedSequences.array) {
					if (seqA.name === seqB.name)
						contains = true;
				}
				if (!contains) {
					this.orderedSequences.array.push(seqA);
				}
			}
			this.orderedSequences.resolve();
		});
	}

	private async getRecord() {
		let p = new Promise<void>(async (resolve) => {
			await Promise.all(this.recordService.ready);
			this.record = await this.recordService.getRecord(this.sequence.name);
			resolve();
		});
		return p;
	}



} // End of class TrainerComponent

