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
            gapi.client.sheets.spreadsheets.values.update(params, requestBody).then((response) => {
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
}