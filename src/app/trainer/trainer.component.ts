import { Component, OnInit } from '@angular/core';
import { TrainerRequest } from './trainer-request';
import { ChangeDetectorRef } from '@angular/core';
import { GoogleAuthService } from '../google-auth.service';
import { ChessSquare, Piece, Colour } from './chess-square';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  public model = new TrainerRequest();
  public output: string;
  public squareSize = 50;
  public squaresMap = new Map<string, ChessSquare>();

  constructor(private cd: ChangeDetectorRef,
    public gauth: GoogleAuthService) {
   
  }

  ngOnInit() {
    this.output = "this is very much work-in-progress.";
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        let coord = ChessSquare.files[i]
        + (j + 1).toString();
        let cs = new ChessSquare(coord, this.squareSize);
        this.squaresMap.set(coord, cs);
        if (coord == "a7") {
          cs.pieceColour = Colour.black;
          cs.piece = Piece.pawn;
        }
        if (coord == "e8") {
          cs.pieceColour = Colour.black;
          cs.piece = Piece.king;
        }
      }
    }
  }


} // End of class TrainerComponent

