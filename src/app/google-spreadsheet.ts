// Wrapper around a Google Docs spreadsheet

export class Spreadsheet {

    constructor(public id: string) { }

    async createSheetIfNotExists(name: string) {
        let p = new Promise<void>(async (resolve) => {
            let response = 
            await gapi.client.sheets.spreadsheets.get({
                spreadsheetId: this.id});
            console.log('sheets: ' + response.result.sheets.length);
            for (let i = 0; i < response.result.sheets.length; i++) {
                let sheet = response.result.sheets[i];
                console.log(JSON.stringify(sheet));
                let properties = sheet.properties;
                console.log(JSON.stringify(properties));
                let name = properties.title;
                console.log('sheet name: ' + name);
            }
            // console.log(JSON.stringify(response));
        });
        return p;
    }
}