import { Component, OnInit } from '@angular/core';
import { TrainerRequest } from './trainer-request';
import { ChangeDetectorRef } from '@angular/core';
import { GoogleAuthService } from '../google-auth.service';
import { ChessSquare } from './chess-square';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  public model = new TrainerRequest();
  public output: string;
  public squareSize = 50;
  public squares = new Array<ChessSquare>()

  constructor(private cd: ChangeDetectorRef,
    public gauth: GoogleAuthService) {
    this.output = "this is very much work-in-progress.";
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        this.squares.push(new ChessSquare(ChessSquare.files[i]
          + (j + 1).toString(), this.squareSize));
      }
    }
  }

  ngOnInit() {
 
  }


} // End of class TrainerComponent

