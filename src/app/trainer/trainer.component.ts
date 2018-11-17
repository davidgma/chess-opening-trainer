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

  public output = new Array<string>();
  @ViewChild(ChessboardComponent) board: ChessboardComponent;
  public name: string;
  public sequence: Sequence;

  constructor(private cd: ChangeDetectorRef,
    public gauth: GoogleAuthService,
    private dataService: DataService,
    private route: ActivatedRoute) { }
  public showHeader = true;

  ngOnInit() {
    this.output.push('Select a sequence from the Moves page.');
    // get the parameters, if any
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.name = params.get('name');
      console.log('showHeader: ' + params.get('header'));
      if (params.get('header') === 'showHeader') {
        this.showHeader = true;
      } else if (params.get('header') === 'hideHeader') {
        this.showHeader = false;
      }
      if (this.name === undefined) {
        this.output.push('No sequence selected. Select one in the Moves section.');
      } else {
        this.output.length = 0;

        // Check the sequence is in the sequences data
        this.sequence = this.dataService.findSequence(this.name);
        if (this.sequence === undefined) {
          this.output.push('The sequence \'' + this.name + '\' cant be found.');
        } else {
          // this.output.length = 0;
          // this.output.push("Sequence found: " + this.sequence.name);
          this.runSequence();
        }
      }
    });

  } // end of ngOnInit

  runSequence() {
    if (this.sequence === undefined) {
      throw new Error('Invalid sequence \'' + name + '\'');
    }
    this.board.load(this.sequence.fen);
    this.board.flipBoardTo(this.board.chess.turn);

    this.output.length = 0;
    this.output.push(this.name);
    // this.output.push("Play your moves in the sequence.");
    let stepCount = 0;

    const sub = this.board.moveMade.subscribe((move: Move) => {
      // console.log("move made: " + move.from + move.to);
      if (stepCount < this.sequence.steps.length) {
        let step = this.sequence.steps[stepCount];
        // console.log("step: " + step.move);
        if ((move.from + move.to) === step.move.from + step.move.to) {
          // Correct move
          this.board.chess.move(step.move);
          // Make the next move if there is one
          stepCount++;
          if (stepCount < this.sequence.steps.length) {
            step = this.sequence.steps[stepCount];
            this.board.chess.move(step.move);
            console.log('fen after move: ' + this.board.chess.fen);
          } else {
            this.output.push('End of sequence');
            sub.unsubscribe();
            return;
          }
        } else {
          this.board.chess.undo();
          this.output.push('incorrect move. s/b '
            + step.move.from + step.move.to);
          stepCount--;
        }
        stepCount++;
        if (stepCount === this.sequence.steps.length) {
          this.output.push('End of sequence');
          sub.unsubscribe();
          return;
        }
      }
      // else {
      //   this.output.push('End of sequence');
      //   sub.unsubscribe();
      //   return;
      // }
    });
  }

  redoSequence() {
    console.log('redo sequence');
    this.runSequence();
  }

} // End of class TrainerComponent

