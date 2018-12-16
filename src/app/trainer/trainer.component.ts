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
	@ViewChild(ChessboardComponent) board: ChessboardComponent;
	public name: string;
	public sequence: Sequence;
	// public successful = true;
	public incrementFactor = 1.5;

	constructor(private cd: ChangeDetectorRef,
		public gauth: GoogleAuthService,
		private dataService: DataService,
		private route: ActivatedRoute,
		private recordService: RecordService) { }
	public showHeader = true;

	async ngOnInit() {

		// If logged into Google, look for records of previous attempts
		Promise.all(this.gauth.ready).then(() => {
			// Google Drive is ready to use
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
		// this.output.push("Play your moves in the sequence.");
		let stepCount = 0;

		const sub = <Subscription>this.board.moveMade.subscribe((move: Move) => {
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
						this.endSequence(sub, successful);
						return;
					}
				} else {
					this.board.chess.undo();
					this.output.push('Incorrect move. should be '
						+ step.move.from + step.move.to);
					stepCount--;
					successful = false;
				}
				stepCount++;
				if (stepCount === this.sequence.steps.length) {
					this.endSequence(sub, successful);
					return;
				}
			}
		});
	}

	async endSequence(sub: Subscription, successful: boolean) {
		let p = new Promise<void>(async (resolve) => {
			this.output.push('End of sequence.');
			sub.unsubscribe();
			let record = await this.recordService.getRecord(this.sequence.name);
			if (record === undefined) {
				let now = new Date();
				let next = new Date();
				if (successful)
					next.setDate(next.getDate() + 1);
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
				let next: Date;
				if (successful)
					next = new Date(now.getTime() + gap);
				else
					next = new Date();

				let r = new Record(this.sequence.name, now, next);
				// console.log("endSequence r: " + JSON.stringify(r));
				await this.recordService.addRecord(r);
				resolve();
			}
		});
	}

	redoSequence() {
		// console.log('redo sequence');
		this.runSequence();
	}

	async nextSequence() {
		let p = new Promise<void>(async (resolve) => {
			await Promise.all(this.recordService.ready);
			let sql = "select * from t_records order by next";
			let results = await this.recordService.ala.execSelect(sql);
			// console.log("nextSequence results: " + JSON.stringify(results));
			if (results.length === 0) {
				this.output.push('No records found.');
				resolve();
				return;
			}
			let name = results[0]['name'];
			// console.log("name: " + name);
			// Check the sequence is in the sequences data
			this.sequence = await this.dataService.findSequence(name);
			if (this.sequence === undefined) {
				this.output.push('The sequence \'' + this.name + '\' cant be found.');
			} else {
				// console.log("nextSequence running: " + this.sequence.name);
				this.runSequence();
				resolve();
			}
		});
		return p;
	}

	async prevSequence() {
		let p = new Promise<void>(async (resolve) => {
			await Promise.all(this.recordService.ready);
			let sql = "select * from t_records order by next desc";
			let results = await this.recordService.ala.execSelect(sql);
			console.log("nextSequence results: " + JSON.stringify(results));
			if (results.length === 0) {
				this.output.push('No records found.');
				resolve();
				return;
			}
			let name = results[0]['name'];
			console.log("name: " + name);
			// Check the sequence is in the sequences data
			this.sequence = await this.dataService.findSequence(name);
			if (this.sequence === undefined) {
				this.output.push('The sequence \'' + this.name + '\' cant be found.');
			} else {
				console.log("nextSequence running: " + this.sequence.name);
				this.runSequence();
				resolve();
			}
		});
		return p;
	}

} // End of class TrainerComponent

