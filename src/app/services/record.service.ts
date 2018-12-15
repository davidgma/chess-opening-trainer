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
	private columns = ['name', 'last', 'next'];
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
				// Create the table anyway just in case the sheet
				// has become blank for some reason.
				let tableData =
					await this.spreadsheet.arrayToJson([this.columns]);
				await this.ala.createTable(this.tableName, tableData);
				// Pull in any data from the spreadsheet
				await this.spreadsheet.readTable(this.tableName);
				let records = await this.ala.execSelect("select * from t_records");
				// console.log("retrieved records: " + JSON.stringify(records));
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
				+ ' where name = "' + name + '"');
			// console.log('record retrieved in getRecord: ' + JSON.stringify(res));
			if (res.length === 0) {
				resolve(undefined);
				return;
			}
			else {
				// console.log(res[0]['name']);
				let record = new Record(
					res[0]['name'], 
					await this.stringToDate(res[0]['last']), 
					await this.stringToDate(res[0]['next']));
				// console.log('getRecord record created: ' 
				// + JSON.stringify(record));
				resolve(record);

				return;
			}
		});
		return p;
	}

	async addRecord(record: Record) {
		let p = new Promise<void>(async (resolve) => {
			await Promise.all(this.ready);
			let sqlDelete = "delete from " + this.tableName
			+ " where name = '" + record.name + "'";
			let deleteResult = await this.ala.exec(sqlDelete);
			// console.log("previous record deleted: " + deleteResult);
			let sqlInsert = "insert into " + this.tableName
				+ " VALUES ("
				+ "'" + record.name + "', "
				+ "'" + await this.dateToString(record.last) + "', "
				+ "'" + await this.dateToString(record.next) + "'"
				+ ")";
			await this.ala.exec(sqlInsert);
			// console.log("new record added");
			this.spreadsheet.writeTable(this.tableName);
			resolve();
		});
		return p;

	}

	async dateToString(date: Date): Promise<string> {
		let p = new Promise<string>((resolve) => {
			let ret = "";
			let year = date.getFullYear().toString();
			let month = (date.getMonth() + 1).toString();
			if (month.length === 1)
				month = "0" + month;
			let day = date.getDate().toString();
			if (day.length === 1)
				day = "0" + day;
			let hour = date.getHours().toString();
			if (hour.length === 1)
				hour = "0" + hour;
			let minute = date.getMinutes().toString();
			if (minute.length === 1)
				minute = "0" + minute;
			resolve(year + "-" + month + "-" + day + " " + hour
				+ ":" + minute);
		});
		return p;
	}

	async stringToDate(date: string): Promise<Date> {
		let p = new Promise<Date>((resolve) => {
			let pattern =
				/^(\d{4})\D+(\d{1,2})\D+(\d{1,2})\D+(\d{1,2})\D+(\d{1,2})/;
			let matches = pattern.exec(date);
			let year = matches[1];
			if (year === undefined)
				throw new Error("Couldn't find year in date string '"
					+ date + "'.");
			let month = matches[2];
			if (month === undefined)
				throw new Error("Couldn't find month in date string '"
					+ date + "'.");
			let day = matches[3];
			if (day === undefined)
				throw new Error("Couldn't find day in date string '"
					+ date + "'.");
			let hour = matches[4];
			if (hour === undefined)
				throw new Error("Couldn't find hour in date string '"
					+ date + "'.");
			let minute = matches[5];
			if (minute === undefined)
				throw new Error("Couldn't find minute in date string '"
					+ date + "'.");
			resolve(new Date(parseInt(year),
				parseInt(month) - 1,
				parseInt(day),
				parseInt(hour),
				parseInt(minute)));
		});
		return p;
	}

	// Store all records back into the spreadsheet
	async save() {
		await this.spreadsheet.writeTable(this.tableName);
	}
	
}