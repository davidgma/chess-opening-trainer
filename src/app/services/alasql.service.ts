import { Injectable } from '@angular/core';
import * as alasql from 'alasql';

// Wrapper around alasql

@Injectable({
	providedIn: 'root'
})
export class AlaSql {

	public async exec(sql: string) {
		let p = new Promise<string>(async (resolve) => {
			// console.log('Sql: ' + sql);
			alasql.promise(sql)
				.then((res) => {
					// console.log('Result: ' + JSON.stringify(res));
					resolve(res);
				});

		});
		return p;
	}

	public async execSelect(sql: string): Promise<Object[]> {
		let p = new Promise<Object[]>(async (resolve) => {
			// console.log('Sql: ' + sql);
			alasql.promise(sql)
				.then((res) => {
					// console.log('Result: ' + JSON.stringify(res));
					resolve(res);
				});

		});
		return p;
	}

	// Create a table from a Json object.
	// This is the form that alasql uses natively, so this
	// should be more efficient than repeating insert into calls.
	public async createTable(tableName: string, data: Object[]) {
		let p = new Promise<void>(async (resolve) => {
			let sql = 'create table ' + tableName;
			// Empty data
			if (data.length < 1) {
				throw new Error('Error - createTable called without even column headings.');
				resolve();
				return;
			}
			// Set column headings
			sql += " (";
			let isFirst = true;
			for (let i = 0; i < Object.keys(data[0]).length; i++) {
				if (isFirst) 
					isFirst = false;
				else
					sql += ", ";
				sql += Object.keys(data[0])[i];
			}
			sql += ")";
			// console.log("createTable sql: " + sql);
			// Create the table
			alasql.promise(sql).then((res) => {
				// If there's data then add it in
				// console.log("data: " + JSON.stringify(data));
				// console.log("createTable data[0]: " 
				// + JSON.stringify(data[0]));
				// console.log("Object.values(data[0])[0]" + Object.values(data[0])[0]);
				// console.log("createTable data.length: " + data.length);
				if (data.length > 0 && Object.values(data[0])[0] !== "") {
					let a = <any>alasql;
					for (let i = 0; i < Object.keys(a.tables).length; i++) {
						if (Object.keys(a.tables)[i] === tableName) {
							let table = <any>Object.values(a.tables)[i];
							table.data = data;
							resolve();
							// console.log('data1: ' + JSON.stringify(table));
						}
					}
				}
				else
					resolve();
			});
		});
		return p;
	}

	// Returns (presumably by reference) the data used by alasql.
	// As it should just return an existing reference, it isn't async.
	public rawData(tableName: string): Object[] {
		let a = <any>alasql;
		for (let i = 0; i < Object.keys(a.tables).length; i++) {
			if (Object.keys(a.tables)[i] === tableName) {
				let table = <any>Object.values(a.tables)[i];
				return table.data;
			}
		}
		throw new Error('rawData called for invalid tablename ' + tableName);
	}
}
