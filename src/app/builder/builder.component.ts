import { Component, OnInit, ViewChild } from '@angular/core';
import { ChessboardComponent } from '../chessboard/chessboard.component';
import { Move } from '../chessboard/chess-enums';

class FenRequest {
    fen: string;
}

@Component({
    selector: 'app-builder',
    templateUrl: './builder.component.html',
    styleUrls: ['./builder.component.css']
})
export class BuilderComponent implements OnInit {

    public output: string;
    @ViewChild(ChessboardComponent) board: ChessboardComponent;

    moves = '';
    public model = new FenRequest();

    constructor() { }

    ngOnInit() {

        this.output = 'Move the pieces to the start position';
        this.recordSequence();

    } // end of ngOnInit

    recordSequence() {
        this.board.load();
        this.board.moveMade.subscribe((move: Move) => {
            this.moves += move.from + move.to + ',';
            console.log(this.moves);
            console.log(this.board.chess.fen);
        });
    }

    flipBoard() {
        this.board.flipBoard();
    }

    resetMoves() {
        this.moves = '';
    }

    async onFenSubmit() {
        console.log('new fen: ' + this.model.fen);
        this.board.load(this.model.fen);
        console.log(this.board.chess.fen);
        this.resetMoves();
    }


} // End of class BuilderComponent

