import { Injectable, EventEmitter } from '@angular/core';
import { JsLoaderService } from './js-loader.service';

declare global {
    var gapi;
}

@Injectable({
    providedIn: 'root'
})
export class GoogleAuthService {
    public javascriptFile = 'https://apis.google.com/js/platform.js';
    public isSignedIn = false;
    public googleDisplay = 'block';
    public googleUser: any;
    public ready = new Array<Promise<void>>();
    private readyResolve: (value?: void | PromiseLike<void>) => void;
    

    constructor(public loader: JsLoaderService) {

        console.log('Loading the javascript API file.');
        this.ready.push(this.loader.loadjs(this.javascriptFile).then(() => {
            // file loaded
        }));

        this.ready.push(new Promise<void>((resolve) => {
            this.readyResolve = resolve;
        }));
        
    }

    public async onSignIn(googleUser) {
        this.googleUser = googleUser;
        console.log('Signed in');
        this.isSignedIn = true;
        this.googleDisplay = 'none';
        await this.loadClient();
        await this.loadSheetsAPI();
        await this.loadDriveAPI();
        this.readyResolve();
    }

    public async signOut() {
        console.log('Signing out.');
        const auth2 = gapi.auth2.getAuthInstance();
        await auth2.signOut().then(() => {
            console.log('signed out');
            this.isSignedIn = false;
            this.googleDisplay = 'block';
        });
    }

    public async loadClient(): Promise<void> {
        const p = new Promise<void>((resolve) => {
            gapi.load('client', () => {
                console.log("client loaded");
                resolve();
            },
                (error) => {
                    console.log('Error loading client: '
                        + JSON.stringify(error));
                });
        });
        return p;
    }

    public async loadSheetsAPI() {
        const p = new Promise<void>((resolve) => {
            gapi.client.load(
                'https://sheets.googleapis.com/$discovery/rest?version=v4')
                .then(() => {
                    console.log("sheets v4 loaded");
                    resolve();
                },
                    (error) => {
                        console.log('Error loading SheetsAPI: '
                            + JSON.stringify(error));
                    });
        });
        return p;
    }

    public async loadDriveAPI() {
        let p = new Promise<void>((resolve) => {
            gapi.client.load(
                'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest')
                .then(() => {
                    console.log("drive v3 loaded");
                    resolve();
                },
                    (error) => {
                        console.log("Error loading DriveAPI: "
                            + JSON.stringify(error));
                    });
        });
        return p;
    }

}
