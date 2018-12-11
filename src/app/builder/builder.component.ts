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

    public output: Array<string> = new Array<string>();
    @ViewChild(ChessboardComponent) board: ChessboardComponent;

    public moves = new Array<Move>();
    public fens = new Array<string>();
    public model = new FenRequest();
    public displayWidth;

    constructor() { }

    ngOnInit() {
        this.output.push('Move the pieces to build a sequence.');
        this.recordSequence();
        this.displayWidth = this.board.wholeSize;
    } // end of ngOnInit

    recordSequence() {
        this.board.load();
        this.fens.push(this.board.chess.fen);
        this.board.moveMade.subscribe((move: Move) => {
            this.moves.push(move);
            this.fens.push(this.board.chess.fen);
            this.updateOutput();
            console.log(this.board.chess.fen);
        });
    }

    flipBoard() {
        this.board.flipBoard();
    }

    restart() {
        this.moves.length = 0;
        this.fens.length = 0;
        this.fens.push(this.board.chess.fen);
        this.updateOutput();
    }

    async onFenSubmit() {
        console.log('new fen: ' + this.model.fen);
        this.board.load(this.model.fen);
        console.log(this.board.chess.fen);
        this.restart();
    }

    undoMove() {
        if (this.moves.length > 0) {
            this.fens.pop();
            this.moves.pop();
            this.board.load(this.fens[this.fens.length - 1]);
            this.updateOutput();
        }
    }

    private updateOutput() {
        this.output.length = 0;
        this.output.push('Starting FEN: ' + this.fens[0]);
        let movesList = 'Moves: ';
        let isFirst = true;
        for (let moveMade of this.moves) {
            if (isFirst)
                isFirst = false;
            else
                movesList += ',';
            movesList += moveMade.from + moveMade.to;
        }
        this.output.push(movesList);
    }


} // End of class BuilderComponent

