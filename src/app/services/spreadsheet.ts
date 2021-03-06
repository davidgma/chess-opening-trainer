// Wrapper around a Google Docs spreadsheet
import { GoogleAuthService } from './google-auth.service';
import { AlaSql } from './alasql.service';

export class Spreadsheet {

	constructor(
		public id: string,
		private gauth: GoogleAuthService,
		private ala: AlaSql) { }

	async createSheetIfNotExists(name: string) {
		let p = new Promise<void>(async (resolve) => {
			let sheets = await this.sheets;
			if (!sheets.includes(name)) {
				await this.createSheet(name);
				resolve();
			}
			else resolve();
		});
		return p;
	}

	async sheetExists(name: string): Promise<boolean> {
		let p = new Promise<boolean>(async (resolve) => {
			let sheets = await this.sheets;
			if (sheets.includes(name)) {
				resolve(true);
			}
			else resolve(false);
		});
		return p;
	}

	get sheets(): Promise<Array<string>> {
		let p = new Promise<Array<string>>(async (resolve) => {
			await Promise.all(this.gauth.ready);
			let ret = new Array<string>();
			let response =
				await gapi.client.sheets.spreadsheets.get({
					spreadsheetId: this.id
				});
			for (let i = 0; i < response.result.sheets.length; i++) {
				ret.push(response.result.sheets[i].properties.title);
			}
			resolve(ret);
		});
		return p;
	}

	// Usually called from createSheetIfNotExists
	public async createSheet(name: string) {
		let p = new Promise<void>(async (resolve) => {
			await Promise.all(this.gauth.ready);
			let params = { spreadsheetId: this.id };
			let requestBody = {
				"requests": [
					{
						"addSheet": {
							"properties": {
								"title": name,
								"gridProperties": {
									"rowCount": 20,
									"columnCount": 12
								}
							}
						}
					}
				]
			};
			gapi.client.sheets.spreadsheets.batchUpdate(params, requestBody).then((response) => {
				resolve();
			},
				(error) => {
					throw new Error('Error creating sheet ' + name
						+ '. reason: ' + JSON.stringify(error));
				});
			// 
		});
		return p;
	}

	public async writeRange(range: string, data: string[][]) {
		let p = new Promise<void>(async (resolve) => {
			await Promise.all(this.gauth.ready);
			let params = {
				spreadsheetId: this.id,
				range: range,
				valueInputOption: 'USER_ENTERED'
			};
			let requestBody = {
				"range": range,
				"values": data
			};
			// console.log('spreadsheet id: ' + this.id);
			gapi.client.sheets.spreadsheets.values.update(params, requestBody).then((response) => {
				// console.log('writeRange response: ' + JSON.stringify(response));
				resolve();
			},
				(reason) => {
					throw new Error('Error writing range ' + name
						+ '. reason: ' + JSON.stringify(reason));
				});
		});
		return p;
	}

	public async setBold(range: string) {
		let p = new Promise<void>(async (resolve) => {
			await Promise.all(this.gauth.ready);
			let gridRange = await this.a1ToGridRange(range);
			// console.log('gridRange: ' + JSON.stringify(gridRange));
			let params = {
				spreadsheetId: this.id
			};
			let requestBody = {
				"requests": [
					{
						"repeatCell": {
							"range": gridRange,
							"cell": {
								"userEnteredFormat": {
									"horizontalAlignment": "LEFT",
									"textFormat": {
										"bold": true
									}
								}
							},
							"fields": "userEnteredFormat(textFormat,horizontalAlignment)"
						}
					},
				]
			};
			gapi.client.sheets.spreadsheets.batchUpdate(params, requestBody).then((response) => {
				resolve();
			},
				(reason) => {
					throw new Error('Error making range bold ' + name
						+ '. reason: ' + JSON.stringify(reason));
				});
		});
		return p;
	}

	// A1 notation must include the sheet name
	public async a1ToGridRange(range: string) {
		let p = new Promise<Object>(async (resolve) => {
			await Promise.all(this.gauth.ready);
			let parts = range.match(/(^.+)!(.+):(.+$)/);
			let sheetName = parts[1];
			let sheetId = await this.sheetId(sheetName);
			let ret: any = {};
			ret.sheetId = sheetId;
			let from = parts[2].match(/(\D+)(\d+)/);
			let to = parts[3].match(/(\D+)(\d+)/);
			if (from[2] !== undefined) {
				ret.startRowIndex = (parseInt(from[2], 10) - 1);
			}
			if (to[2] !== undefined) {
				ret.endRowIndex = (parseInt(to[2], 10));
			}
			if (from[1] !== undefined) {
				ret.startColumnIndex = this.toColumnIndex(from[1]) - 1;
			}
			if (to[1] !== undefined) {
				ret.endColumnIndex = this.toColumnIndex(to[1]);
			}

			// console.log(JSON.stringify(ret));
			resolve(ret);
		});
		return p;
	}

	private toColumnIndex(letters: string): number {
		let ret = 0;
		for (let i = 0; i < letters.length; i++) {
			let char = letters[i];
			ret += char.toUpperCase().charCodeAt(0) - 64;
		}
		return ret;
	}

	sheetId(sheetName: string): Promise<number> {
		let p = new Promise<number>(async (resolve) => {
			await Promise.all(this.gauth.ready);
			let response =
				await gapi.client.sheets.spreadsheets.get({
					spreadsheetId: this.id
				});
			for (let i = 0; i < response.result.sheets.length; i++) {
				if (response.result.sheets[i].properties.title ===
					sheetName) {
					resolve(response.result.sheets[i].properties.sheetId);
				}
			}
			resolve(-1);
		});
		return p;
	}

	// Writes an alasql table to a sheet in the spreadsheet.
	// Uses the existing alasql data rather than a select query for efficiency.
	async writeTable(tableName: string) {
		let p = new Promise<void>(async (resolve) => {
			let values = await this.jsonToArray(this.ala.rawData(tableName));
			await this.createSheetIfNotExists(tableName);
			await this.clearSheet(tableName);
			await this.writeRange(tableName, values);
			resolve();
		});
		return p;
	}

	public async jsonToArray(data: Object[]): Promise<string[][]> {
		let p = new Promise<string[][]>((resolve) => {
			let r = new Array<Array<string>>();
			if (data.length === 0) {
				resolve(r);
				return;
			}
			let r1 = new Array<string>();
			// column names
			for (let key of Object.keys(data[0])) {
				// r1.push(key.replace('"', '\"'));
				r1.push(key);
			}
			r.push(r1);

			// row data
			for (let row of Object.values(data)) {
				let r2 = new Array<string>();
				for (let rowData of Object.values(row)) {
					// r2.push(rowData.replace('"', '\"'));
					r2.push(rowData);
				}
				r.push(r2);
			}
			// This is how to get the array in the right format
			// for the Sheets API
			// console.log(JSON.stringify(r));
			resolve(r);
		});
		return p;
	}

	public async arrayToJson(data: string[][]): Promise<Object[]> {
		let p = new Promise<Object[]>((resolve) => {
			if (data.length < 1) {
				throw new Error('arrayToJson called without at least 1 line');
			}
			let ret = new Array<Object>();
			if (data.length === 1) {
				// empty table - just column names
				let obj = new Object();
				for (let k = 0; k < data[0].length; k++) {
					let key = data[0][k];
					obj[key] = '';
				}
				ret.push(obj);
			}
			else { // not an empty table
				for (let i = 1; i < data.length; i++) {
					let obj = new Object();
					for (let k = 0; k < data[0].length; k++) {
						let key = data[0][k];
						obj[key] = data[i][k];
					}
					ret.push(obj);
				}
			}
			// console.log(JSON.stringify(ret));
			resolve(ret);
		});
		return p;
	}

	public async deleteSheet(name: string) {
		let p = new Promise<void>(async (resolve) => {
			await Promise.all(this.gauth.ready);
			let sheetId = await this.sheetId(name);
			if (sheetId === -1) {
				resolve();
				return;
			}

			let params = { spreadsheetId: this.id };
			let requestBody = {
				"requests": [
					{
						"deleteSheet": {
							"sheetId": sheetId
						}
					}
				]
			};
			gapi.client.sheets.spreadsheets.batchUpdate(params, requestBody).then((response) => {
				resolve();
			},
				(error) => {
					throw new Error('Error deleting sheet ' + name
						+ '. reason: ' + JSON.stringify(error));
				});
			// 
		});
		return p;
	}

	public async clearSheet(name: string) {
		let p = new Promise<void>(async (resolve) => {
			await Promise.all(this.gauth.ready);
			let sheetId = await this.sheetId(name);
			if (sheetId === -1) {
				resolve();
				return;
			}

			let params = { spreadsheetId: this.id };
			let requestBody = {
				"requests": [
					{
						"updateCells": {
							"range": {
								"sheetId": sheetId
							},
							"fields": "userEnteredValue"
						}
					}
				]
			};
			gapi.client.sheets.spreadsheets.batchUpdate(params, requestBody).then((response) => {
				resolve();
			},
				(error) => {
					throw new Error('Error deleting sheet ' + name
						+ '. reason: ' + JSON.stringify(error));
				});
			// 
		});
		return p;
	}

	// Reads an alasql table from a sheet in the spreadsheet.
	async readTable(tableName: string) {
		let p = new Promise<void>(async (resolve) => {
			let data = await this.readSheet(tableName);
			if (data.length > 0) {
				let tableData = await this.arrayToJson(data);
				// console.log('readTable tableData: ' + JSON.stringify(tableData));
				await this.ala.exec('drop table if exists ' + tableName);
				await this.ala.createTable(tableName, tableData);
				let qr = await this.ala.execSelect("select * from " + tableName);
				// console.log("readTable results: " + JSON.stringify(qr));
			}
			resolve();
		});
		return p;
	}

	async readSheet(sheetName: string) {
		let p = new Promise<string[][]>(async (resolve) => {
			resolve(this.readRange(sheetName));
		});
		return p;
	}

	async readRange(rangeName) {
		let p = new Promise<string[][]>(async (resolve) => {
			await Promise.all(this.gauth.ready);
			let ret = new Array<Array<string>>();
			let params = {
				spreadsheetId: this.id,
				range: rangeName
			};
			gapi.client.sheets.spreadsheets.values.get(params).then((response) => {
				if (response.result.values !== undefined) {
					for (let v of response.result.values) {
						ret.push(v);
					}
				}
				// console.log('return from readRange: ' + JSON.stringify(ret));
				resolve(ret);
			}, (error) => {
				throw new Error('Error reading range ' + rangeName
					+ '. reason: ' + JSON.stringify(error));
			});

		});
		return p;
	}
}