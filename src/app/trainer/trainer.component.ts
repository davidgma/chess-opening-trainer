import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { GoogleAuthService } from '../google-auth.service';
import { ChessboardComponent } from '../chessboard/chessboard.component';
import { ChessSquare } from '../chessboard/chess-square';
import { Colour, Piece } from '../chessboard/chess-enums';
@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  public output: string;
  @ViewChild(ChessboardComponent) board: ChessboardComponent;

  constructor(private cd: ChangeDetectorRef,
    public gauth: GoogleAuthService) { }

  ngOnInit() {

    this.output = "this is very much work-in-progress.";
    //console.log("length of squaresMap: " + this.board.squaresMap.size);
    this.board.squaresMap.forEach((cs: ChessSquare, key: string) => {
      //console.log(value.coordinate);
      let coord = cs.coordinate;
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
    });
  } // end of ngOnInit


} // End of class TrainerComponent

