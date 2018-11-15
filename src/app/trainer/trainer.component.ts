import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { GoogleAuthService } from '../google-auth.service';
import { ChessboardComponent } from '../chessboard/chessboard.component';
import { DataService } from '../data.service';
import { Colour, Move } from '../chessboard/chess-enums';

// import { ChessSquare } from '../chessboard/chess-square';
// import { Colour, PieceType } from '../chessboard/chess-enums';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  public output: string;
  @ViewChild(ChessboardComponent) board: ChessboardComponent;

  constructor(private cd: ChangeDetectorRef,
    public gauth: GoogleAuthService,
    private dataService: DataService) { }

  ngOnInit() {

    this.output = "this is very much work-in-progress.";
    //this.runSequence("Sicilian Dragon Initial");
    this.runSequence("Sicilian Dragon Bishop Advance");

  } // end of ngOnInit

  runSequence(name: string) {
    let seq = this.dataService.findSequence(name);
    if (seq == null) {
      throw new Error("Invalid sequence '" + name + "'");
    }
    this.board.load(seq.fen);
    if (this.board.chess.turn == Colour.BLACK)
      this.board.flipBoard();

    // console.log("fen: " + this.board.chess.fen + " . Turn: "
    //   + this.board.chess.turn);
    let stepCount = 0;

    this.board.moveMade.subscribe((move: Move) => {
      //console.log("move made: " + move.from + move.to);
      if (stepCount < seq.steps.length) {
        let step = seq.steps[stepCount];
        //console.log("step: " + step.move);
        if ((move.from + move.to) == step.move.from + step.move.to) {
          // Correct move
          this.board.chess.move(step.move);
          //   console.log("fen after move: " + this.board.chess.fen);
          console.log("correct move");
          // Make the next move if there is one
          stepCount++;
          if (stepCount < seq.steps.length) {
            step = seq.steps[stepCount];
            let m = this.board.chess.move(step.move);
            //console.log("fen after move: " + this.board.chess.fen);
          }
          else {
            console.log("End of sequence");
          }
        }
        else {
          //this.board.movingFrom.moveBack();
          this.board.chess.undo();
          console.log("incorrect move. s/b "
            + step.move.from + step.move.to);
          stepCount--;
        }
        stepCount++;
        if (stepCount == seq.steps.length) {
          console.log("End of sequence");
        }
      }
      else {
        console.log("End of sequence");
      }
    });
  }


} // End of class TrainerComponent

