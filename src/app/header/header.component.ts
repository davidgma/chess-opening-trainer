import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { GoogleAuthService } from '../services/google-auth.service';
import { DataService } from '../services/data.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    public isSignedIn: boolean = true;
    public googleDisplay = "block";

    constructor(public gdata: GoogleAuthService,
        private cd: ChangeDetectorRef,
        // This causes the data to be loaded earlier on
        public dataService: DataService) {
        window.onSignIn = (googleUser) => this.onSignIn(googleUser);
    }

    onSignIn(googleUser) {
        this.gdata.onSignIn(googleUser);
        // this.isSignedIn = this.gdata.isSignedIn;
        this.googleDisplay = this.gdata.googleDisplay;
        this.cd.detectChanges();
      }
    
      public async signOut() {
        console.log("calling gdata signout...");
        await this.gdata.signOut();
        console.log("gdata signout finished");
        // this.isSignedIn = this.gdata.isSignedIn;
        this.googleDisplay = this.gdata.googleDisplay;
        this.cd.detectChanges();
      }
    
      ngOnInit() { }
} // End of class HeaderComponent
