import { Injectable } from '@angular/core';
import { AlaSql } from './alasql.service';
import { SpreadsheetService } from './spreadsheet.service';
import { Spreadsheet } from './spreadsheet';

export class Record {
	// name: string; // name of the sequence
	// last: Date; // date and time last practiced
	// next: Date; // due date for next practise
	constructor(public name: string,
		public last: Date,
		public next: Date) { }
}

@Injectable({
	providedIn: 'root'
})
export class RecordService {

	private spreadsheetName = 'Chess Opening Trainer';
	private tableName = 't_records';
	private columns = ['Name', 'Last', 'Next'];
	public ready = new Array<Promise<void>>();
	private spreadsheet: Spreadsheet;

	constructor(public spreadsheetService: SpreadsheetService,
		public ala: AlaSql) {
		this.ready.push(new Promise<void>((resolve) => {
			this.retrieveRecords().then(() => {
				// Records on previous attempts have been retrieved from
				// the spreadsheet
				resolve();
			});
		}));

	}

	private async retrieveRecords() {
		let p = new Promise<void>(async (resolve) => {
			this.spreadsheet = await this.spreadsheetService.getSpreadsheet(
				this.spreadsheetName
			);
			let exists = await this.spreadsheet.sheetExists(this.tableName);
			if (!exists) {
				console.log('t_records table being created...');
				let tableData = await this.spreadsheet.arrayToJson([this.columns]);
				await this.ala.createTable(this.tableName, tableData);
				await this.spreadsheet.writeTable(this.tableName);
				await this.spreadsheet.setBold(this.tableName + '!A1:C1');
				resolve();
			}
			else {
				await this.spreadsheet.readTable(this.tableName);
				resolve();
			}
		});
		return p;
	}

	// finds a record from the records table
	async getRecord(name: string): Promise<Record> {
		let p = new Promise<Record>(async (resolve) => {
			await Promise.all(this.ready);
			let res = await this.ala.execSelect(
				'select * from '
				+ this.tableName
				+ ' where Name = "' + name + '"');
			console.log('record retrieved in getRecord: ' + JSON.stringify(res));
			if (res.length === 0) {
				resolve(undefined);
				return;
			}
			else {
				resolve(new Record(
					res[0]['Name'], res[0]['Last'], res[0]['Next']));
				return;
			}
		});
		return p;
	}

	async addRecord(record: Record) {
		let p = new Promise<void>(async (resolve) => {
			await Promise.all(this.ready);
			console.log("addRecord called");
			let sql = "insert into " + this.tableName
				+ " VALUES ("
				+ "'" + record.name + "', "
				+ "'" + record.last + "', "
				+ "'" + record.next + "'"
				+ ")";
			await this.ala.exec(sql);
			this.spreadsheet.writeTable(this.tableName);
			resolve();
		});
		return p;

	}

	// Store a record back into the spreadsheet
	// storeRecord(record: Record) {
	//     let index = this.records.indexOf(record);
	//     console.log("record index: " + index);
	// }
}