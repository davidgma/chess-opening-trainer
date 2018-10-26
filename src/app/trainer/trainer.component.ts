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
        if (coord[1] == "7") {
          cs.pieceColour = Colour.black;
          cs.piece = Piece.pawn;
        }
        if (coord[1] == "2") {
          cs.pieceColour = Colour.white;
          cs.piece = Piece.pawn;
        }
        if (coord == "e8") {
          cs.pieceColour = Colour.black;
          cs.piece = Piece.king;
        }
        if (coord == "e1") {
          cs.pieceColour = Colour.white;
          cs.piece = Piece.king;
        }
        if (coord == "d8") {
          cs.pieceColour = Colour.black;
          cs.piece = Piece.queen;
        }
        if (coord == "d1") {
          cs.pieceColour = Colour.white;
          cs.piece = Piece.queen;
        }
        if (coord == "a8" || coord == "h8") {
          cs.pieceColour = Colour.black;
          cs.piece = Piece.rook;
        }
        if (coord == "a1" || coord == "h1") {
          cs.pieceColour = Colour.white;
          cs.piece = Piece.rook;
        }
        if (coord == "b8" || coord == "g8") {
          cs.pieceColour = Colour.black;
          cs.piece = Piece.knight;
        }
        if (coord == "b1" || coord == "g1") {
          cs.pieceColour = Colour.white;
          cs.piece = Piece.knight;
        }
        if (coord == "c8" || coord == "f8") {
          cs.pieceColour = Colour.black;
          cs.piece = Piece.bishop;
        }
        if (coord == "c1" || coord == "f1") {
          cs.pieceColour = Colour.white;
          cs.piece = Piece.bishop;
        }


      }
    }


  } // end of ngOnInit

  mouseDown(event: MouseEvent) {
    console.log("mouse pressed down");
    console.log("target: " + event.target);
    
  }

  mouseMove(event: MouseEvent) {
    console.log("mouse moved");
  }

  mouseUp(event: MouseEvent) {
    console.log("mouse released");
  }

  mouseLeave(event: MouseEvent) {
    console.log("mouse leave event occurred");
  }


} // End of class TrainerComponent

