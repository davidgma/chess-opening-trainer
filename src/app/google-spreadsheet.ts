// Wrapper around a Google Docs spreadsheet
import { GoogleAuthService } from './google-auth.service';

export class Spreadsheet {

    constructor(public id: string,
        private gauth: GoogleAuthService) { }

    async createSheetIfNotExists(name: string) {
        let p = new Promise<void>(async (resolve) => {
            let sheets = await this.sheets;
            if (!sheets.includes(name)) {
                this.createSheet(name);
            }
            else resolve();
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
                + '. reason: ' + error);
            });
            // 
        });
        return p;
    }
}