import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { GoogleAuthService } from '../google-auth.service';
import { ChessboardComponent } from '../chessboard/chessboard.component';
import { DataService, Sequence } from '../data.service';
import { Colour, Move } from '../chessboard/chess-enums';
import { ActivatedRoute, ParamMap } from '@angular/router';

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
  public name: string;
  public sequence: Sequence;

  constructor(private cd: ChangeDetectorRef,
    public gauth: GoogleAuthService,
    private dataService: DataService,
    private route: ActivatedRoute) { }
    public showHeader = true;

  ngOnInit() {

    // get the parameters, if any
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.name = params.get('name');
      console.log("showHeader: " + params.get("header"));
      if (params.get("header") == "showHeader") {
        this.showHeader = true;
      }
      else if (params.get("header") == "hideHeader") {
        this.showHeader = false;
      } 
      if (this.name == null) {
        console.log("No sequence selected. Select one in the Moves section.");
      }
      else {
        console.log("Sequence name: " + this.name);
        // Check the sequence is in the sequences data
        this.sequence = this.dataService.findSequence(this.name);
        if (this.sequence == null) {
          console.log("The sequence '" + this.name + "' cant be found.");
        }
        else {
          console.log("sequence found: " + this.sequence.name);
          this.runSequence();
        }
      }
    });

    this.output = "Select a sequence from the Moves page.";

  } // end of ngOnInit

  runSequence() {
    if (this.sequence == null) {
      throw new Error("Invalid sequence '" + name + "'");
    }
    this.board.load(this.sequence.fen);
    if (this.board.chess.turn == Colour.BLACK)
      this.board.flipBoard();

    // console.log("fen: " + this.board.chess.fen + " . Turn: "
    //   + this.board.chess.turn);
    let stepCount = 0;

    this.board.moveMade.subscribe((move: Move) => {
      //console.log("move made: " + move.from + move.to);
      if (stepCount < this.sequence.steps.length) {
        let step = this.sequence.steps[stepCount];
        //console.log("step: " + step.move);
        if ((move.from + move.to) == step.move.from + step.move.to) {
          // Correct move
          this.board.chess.move(step.move);
          //   console.log("fen after move: " + this.board.chess.fen);
          console.log("correct move");
          // Make the next move if there is one
          stepCount++;
          if (stepCount < this.sequence.steps.length) {
            step = this.sequence.steps[stepCount];
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
        if (stepCount == this.sequence.steps.length) {
          console.log("End of sequence");
        }
      }
      else {
        console.log("End of sequence");
      }
    });
  }


} // End of class TrainerComponent

