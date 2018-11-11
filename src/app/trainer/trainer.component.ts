import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { GoogleAuthService } from '../google-auth.service';
import { ChessboardComponent } from '../chessboard/chessboard.component';
import { ChessSquare } from '../chessboard/chess-square';
import { Colour, PieceType } from '../chessboard/chess-enums';
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
    console.log("fen: " + this.board.chess.fen);
    this.board.load("rnbqkbnr/p1pppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
    console.log("fen: " + this.board.chess.fen);
  } // end of ngOnInit


} // End of class TrainerComponent

