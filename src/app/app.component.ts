import { Component, OnInit } from '@angular/core';

declare global {
  interface Window { onSignIn: (googleuser: any) => void; }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isSignedIn = false;
  public googleDisplay = 'block';

  constructor() {
  }



  ngOnInit() { }


}
