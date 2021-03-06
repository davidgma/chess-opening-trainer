import { Injectable, EventEmitter } from '@angular/core';
import { Sequence } from '../shared-classes/sequence';
import { GoogleAuthService } from './google-auth.service';
import { Observable, BehaviorSubject, from, Subject } from 'rxjs';
import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { Spreadsheet } from './spreadsheet';
import { RecordService } from './record.service';
import { AlaSql } from './alasql.service';

@Injectable({
	providedIn: 'root'
})
export class DataService implements DataSource<Sequence> {

	// public records = new Array<Record>();
	public sequencesLoaded = new Array<Promise<void>>();
	public sequencies = new Array<Sequence>();
	private subject = new BehaviorSubject<Sequence[]>(null);
	public spreadsheet: Spreadsheet;

	constructor(public gauth: GoogleAuthService,
		public ala: AlaSql,
		private recordService: RecordService) {
		this.sequencesLoaded.push(this.loadSequences());
	}

	public async loadSequences(): Promise<void> {
		let p = new Promise<void>((resolve) => {
			this.addBasicSequencies();
			this.subject.next(this.sequencies);
			Promise.all(this.gauth.ready).then(async () => {
				console.log("Google ready");
				await this.retrieveSequences();
				this.subject.next(this.sequencies);
				resolve();
			});
		});
		return p;
	}


	private addBasicSequencies() {
		let name, fen, moves;
		name = 'Sicilian Dragon Initial';
		fen = 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1';
		moves = 'c7c5,g1f3,d7d6,d2d4,c5d4,f3d4,g8f6,b1c3,g7g6,c1e3,f8g7,f2f3,b8c6,d1d2,e8g8,f1c4,c8d7,e1c1,c6e5,c4b3';
		this.addSequence(name, fen, moves);
		name = 'Sicilian Dragon Bishop Advance';
		fen = 'r2q1rk1/pp1bppbp/3p1np1/4n3/3NP3/1BN1BP2/PPPQ2PP/2KR3R b - - 8 11';
		moves = 'a8c8,e3h6,g7h6,d2h6,c8c3,b2c3,a7a5,a2a4,d8c7,h6e3,c7c5,c1d2,d7a4,d1a1,a4b3,c2b3,d6d5';
		this.addSequence(name, fen, moves);
		name = 'Semi-Slav Be7';
		fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
		moves = 'd2d4,d7d5,g1f3,g8f6,c2c4,c7c6,b1c3,e7e6,c1g5,f8e7,e2e3,e8g8,d1c2,b8d7,e1c1,f8e8,c1b1,a7a6,h2h4,b7b5,c4c5,b5b4,c3a4,a6a5,g5f6,e7f6,f3g5,d7f8,f1d3,g7g6,a4b6,a8a7,b6c8,d8c8,f2f4,a5a4,c2f2';
		this.addSequence(name, fen, moves);
		name = 'Semi-Slav Cambridge Springs';
		fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
		moves = 'd2d4,d7d5,g1f3,c7c6,c2c4,g8f6,b1c3,e7e6,c1g5,b8d7,d1c2,d8a5,g5d2,a5d8,e2e4';
		this.addSequence(name, fen, moves);
		name = 'Lucena Position';
		fen = '1K6/1P1k4/8/8/8/8/2R5/r7 w - - 0 1';
		moves = 'c2d2,d7e7,d2d4,a1c1,b8a7,c1a1,a7b6,a1b1,b6c6,b1c1,c6b5,c1b1,d4b4';
		this.addSequence(name, fen, moves);
		name = 'Lucena Position Variation';
		fen = '1K6/1P1k4/8/8/8/8/2R5/r7 w - - 0 1';
		moves = 'c2d2,d7e6,b8c8,a1c1,c8d8,c1b1,d2d7,e6e5,d8c8';
		this.addSequence(name, fen, moves);
	}

	public async findSequence(name: string, wait: boolean = true): Promise<Sequence> {
		let p = new Promise<Sequence>((resolve) => {
			for (const seq of this.sequencies) {
				if (seq.name === name) {
					resolve(seq);
				}
			}
			// wait for google auth
			if (wait) {
				Promise.all(this.sequencesLoaded).then(async () => {
					let seq = await this.findSequence(name, false);
					resolve(this.findSequence(name, false));
				});
			}
		});
		return p;

	}

	private addSequence(name: string, fen: string, moves: string) {
		const seq = new Sequence();
		seq.name = name;
		seq.fen = fen;
		const parts = moves.split(',');
		for (let i = 0; i < parts.length; i++) {
			seq.addStep(parts[i], '');
		}
		this.sequencies.push(seq);
	}

	// Get sequences from a Google spreadsheet.
	// Needs to be in /etc/chess-opening-trainer
	private async retrieveSequences() {
		const p = new Promise<void>((resolve) => {
			let q = "name contains 'Chess Opening Trainer' and mimeType contains 'google-apps.spreadsheet'";
			let list = gapi.client.drive.files.list(
				{ q: q }
			);
			list.execute((resp) => {
				if (resp.files.length === 0) {
					throw new Error('No Google Docs spreadsheet Chess Opening Trainer found');
				}
				this.spreadsheet = new Spreadsheet(resp.files[0].id,
					this.gauth, this.ala);
				gapi.client.sheets.spreadsheets.values.get({
					spreadsheetId: this.spreadsheet.id,
					range: "Sequences!A2:C"
				}).then((response) => {
					for (let i = 0; i < response.result.values.length; i++) {
						this.addSequence(response.result.values[i][0],
							response.result.values[i][1], response.result.values[i][2]);
					}
					resolve();
				}, (error) => {
					throw new Error(error.result.error.message);
				});
				this.addRecords();
			});
		});
		return p;
	}


	connect(collectionViewer: CollectionViewer): Observable<Sequence[]> {
		return this.subject.asObservable();
	}

	disconnect(collectionViewer: CollectionViewer): void {
		this.subject.complete();
	}

	async addRecords(): Promise<void> {
		let p = new Promise<void>(async (resolve) => {
			resolve();
		});
		return p;
	}
}
