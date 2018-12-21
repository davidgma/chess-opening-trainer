import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { GoogleAuthService } from '../services/google-auth.service';
import { ChessboardComponent } from '../chessboard/chessboard.component';
import { DataService, Sequence } from '../services/data.service';
import { Record, RecordService } from '../services/record.service';
import { Colour, Move } from '../chessboard/chess-enums';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

// import { ChessSquare } from '../chessboard/chess-square';
// import { Colour, PieceType } from '../chessboard/chess-enums';

@Component({
	selector: 'app-trainer',
	templateUrl: './trainer.component.html',
	styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

	public output = new Array<string>();
	public outputColour = "#b7d7d9";
	@ViewChild(ChessboardComponent) board: ChessboardComponent;
	public name: string;
	public sequence: Sequence;
	// public successful = true;
	public incrementFactor = 1.5;
	public orderedSequences = new Array<Sequence>();
	public orderedSequencesReady = new Array<Promise<void>>();
	private orderedSequencesReadyResolve;
	public showHeader = true;
	public runningSubscription: Subscription;

	constructor(private cd: ChangeDetectorRef,
		public gauth: GoogleAuthService,
		private dataService: DataService,
		private route: ActivatedRoute,
		private recordService: RecordService) {
		let p = new Promise<void>((resolve) => {
			this.orderedSequencesReadyResolve = resolve;
		});
		this.orderedSequencesReady.push(p);
	}

	async ngOnInit() {

		// If logged into Google, look for records of previous attempts
		Promise.all(this.gauth.ready).then(() => {
			// Google Drive is ready to use
			this.generateOrderedSequences();
		});
		this.output.push('Select a sequence from the Moves page.');
		// get the parameters, if any
		this.route.paramMap.subscribe(async (params: ParamMap) => {
			this.name = params.get('name');
			console.log('showHeader: ' + params.get('header'));
			if (params.get('header') === 'showHeader') {
				this.showHeader = true;
			} else if (params.get('header') === 'hideHeader') {
				this.showHeader = false;
			}
			if (this.name === undefined || this.name === null) {
				await this.nextSequence();
				this.runSequence();
				return;
			} else {
				this.output.length = 0;

				// Check the sequence is in the sequences data
				this.sequence = await this.dataService.findSequence(this.name);
				if (this.sequence === undefined) {
					this.output.push('The sequence \'' + this.name + '\' cant be found.');
				} else {
					this.runSequence();
				}
			}
		});

	} // end of ngOnInit

	runSequence() {
		if (this.sequence === undefined) {
			throw new Error('Invalid sequence \'' + name + '\'');
		}
		this.board.load(this.sequence.fen);
		this.board.flipBoardTo(this.board.chess.turn);
		let successful = true;
		this.output.length = 0;
		this.name = this.sequence.name;
		this.output.push(this.name);
		this.setOutputColour();
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
					this.outputColour = "#e20f0f"; // red
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
			let record = await this.recordService.getRecord(this.sequence.name);
			if (record === undefined) {
				let now = new Date();
				let next = new Date();
				if (successful) {
					next.setDate(next.getDate() + 1);
					this.outputColour = "#1daf07"; // green
				}
				console.log("New record. name: " + this.sequence.name
					+ ", last: " + now
					+ ", next: " + next);
				record = new Record(this.sequence.name, now, next);
				await this.recordService.addRecord(record);
				resolve();
			}
			else {
				let gap =
					(record.next.getTime() - record.last.getTime()) * this.incrementFactor;
				let oneDay = 1000 * 60 * 60 * 24;
				if (gap < oneDay)
					gap = oneDay;
				let now = new Date();
				let last: Date;
				let next: Date;
				if (successful) {
					last = new Date();
					next = new Date(now.getTime() + gap);
					this.outputColour = "#1daf07"; // green
				}
				else { // unsuccessful
					last = record.last;
					next = new Date();
				}

				let r = new Record(this.sequence.name, last, next);
				// console.log("endSequence r: " + JSON.stringify(r));
				await this.recordService.addRecord(r);
				resolve();
			}
		});
	}

	redoSequence() {
		// console.log('redo sequence');
		if (this.runningSubscription !== undefined 
			&& ! this.runningSubscription.closed) {
			this.runningSubscription.unsubscribe();
		}
		this.runSequence();
	}

	async nextSequence() {
		if (this.runningSubscription !== undefined 
			&& ! this.runningSubscription.closed) {
			this.runningSubscription.unsubscribe();
		}
		let p = new Promise<void>(async (resolve) => {
			await Promise.all(this.orderedSequencesReady);
			if (this.sequence === undefined) {
				if (this.orderedSequences.length > 0) {
					this.sequence = this.orderedSequences[0];
					resolve();
					return;
				}
			}
			for (let i = 0; i < this.orderedSequences.length; i++) {
				let seq = this.orderedSequences[i];
				if (seq.name === this.sequence.name) {
					// for (let s of this.orderedSequences) {
					// 	console.log("nextSequence " + s.name);
					// }
					if (i < this.orderedSequences.length) {
						this.sequence
							= this.orderedSequences[i + 1];
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
			&& ! this.runningSubscription.closed) {
			this.runningSubscription.unsubscribe();
		}
		let p = new Promise<void>(async (resolve) => {
			await Promise.all(this.orderedSequencesReady);
			if (this.sequence === undefined) {
				if (this.orderedSequences.length > 0) {
					this.sequence = this.orderedSequences[0];
					resolve();
					return;
				}
			}
			for (let i = 0; i < this.orderedSequences.length; i++) {
				let seq = this.orderedSequences[i];
				if (seq.name === this.sequence.name) {
					if (i > 0) {
						this.sequence
							= this.orderedSequences[i - 1];
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
			this.orderedSequences = new Array<Sequence>();
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
						this.orderedSequences.push(seq);
					}

				}
			}
			// Pull in any other sequences
			for (let seqA of this.dataService.sequencies) {
				let contains = false;
				for (let seqB of this.orderedSequences) {
					if (seqA.name === seqB.name)
						contains = true;
				}
				if (!contains) {
					this.orderedSequences.push(seqA);
				}
			}
			this.orderedSequencesReadyResolve();
		});
	}

	private async setOutputColour(): Promise<void> {
		let p = new Promise<void>(async (resolve) => {
			await Promise.all(this.recordService.ready);
			let record = await this.recordService.getRecord(this.sequence.name);
			if (record !== undefined) {
				this.output.push("Last completed correctly: "
					+ await this.recordService.dateToString(record.last));
				this.output.push("Next attempt due:  "
					+ await this.recordService.dateToString(record.next));
				let now = new Date();
				if (record.next < now) {
					this.outputColour = "#e20f0f"; // red
				}
				else {
					this.outputColour = "#1daf07"; // green
				}
			}
			resolve();
		});
		return p;
	}

} // End of class TrainerComponent

