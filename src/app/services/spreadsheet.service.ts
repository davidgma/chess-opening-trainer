import { Injectable } from '@angular/core';
import { GoogleAuthService } from './google-auth.service';
import { Spreadsheet } from './spreadsheet';
import { AlaSql } from './alasql.service';

@Injectable({
	providedIn: 'root'
})
export class SpreadsheetService {
	private spreadsheets = new Map<string, Spreadsheet>();

	constructor(public gauth: GoogleAuthService,
		public ala: AlaSql) { }

	public async getSpreadsheet(name: string): Promise<Spreadsheet> {
		let p = new Promise<Spreadsheet>(async (resolve) => {
			if (this.spreadsheets.get(name) === undefined) {
				await Promise.all(this.gauth.ready);
				console.log("Spreadsheet '" + name + "' not yet retrieved. Retrieving...");	
				let q = "name = '" + name + "' and mimeType contains 'google-apps.spreadsheet'";
				let list = gapi.client.drive.files.list(
					{ q: q }
				);
				list.execute((resp) => {
					if (resp.files.length === 0) {
						throw new Error("No Google Docs spreadsheet '"
							+ name + "' found.");
					}
					let s = new Spreadsheet(resp.files[0].id,
						this.gauth, this.ala);
					this.spreadsheets.set(name, s);
					resolve(s);
				});
			}
			else
				resolve(this.spreadsheets.get(name));
		});
		return p;
	}
}