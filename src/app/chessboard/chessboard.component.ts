
import { Component, OnInit, OnDestroy, SystemJsNgModuleLoader } from '@angular/core';
import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { ChessSquare } from './chess-square';
import { files, Move, Colour } from './chess-enums';
import { Chess, FenValidationResult, ChessPiece } from './chess';
import { ThrowStmt } from '@angular/compiler';

@Component({
    selector: 'app-chessboard',
    templateUrl: './chessboard.component.html',
    styleUrls: ['./chessboard.component.css']
})
export class ChessboardComponent implements OnInit {

    constructor(private cd: ChangeDetectorRef) {
        this.calculateSizes();
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const coord = files[i]
                    + (j + 1).toString();
                const cs = new ChessSquare(coord, this);
                cs.init();
                this.squaresMap.set(coord, cs);
            }
        }
        // https://github.com/jhlywa/chess.js
        this.chess = new Chess();
        this.chess.onChange.subscribe(() => {
            this.positionPieces();
        });
    }


    get viewBox(): string {
        return '0 0 '
            + (this.wholeSize).toString()
            + ' ' + (this.wholeSize).toString();

    }

    public squaresMap = new Map<string, ChessSquare>();
    public mouseMoveLocal = new EventEmitter<MouseEvent>();
    public mouseUpLocal = new EventEmitter<MouseEvent>();
    public moving = false;
    public movingFrom: ChessSquare;
    public chess: Chess;
    public boardSide: Colour = Colour.WHITE;
    public moveMade: EventEmitter<Move> = new EventEmitter<Move>();

    // this is needed in the component because the template
    // needs it to calculate the total svg size of the area.
    public squareSize: number;
    public wholeSize: number;

    public resize = new EventEmitter<void>();
    public flipBoard() {
        this.boardSide === Colour.WHITE ? this.boardSide = Colour.BLACK
            : this.boardSide = Colour.WHITE;
        this.flip();
    }

    private flip() {
        this.squaresMap.forEach((cs: ChessSquare, key: string) => {
            cs.calculateRowColumn();
            this.positionPieces();
        });
    }

    public flipBoardTo(colour: Colour) {
        this.boardSide = colour;
        this.flip();
    }

    public load(fen: string = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1') {
        const r: FenValidationResult = this.chess.validate_fen(fen);
        if (!r.valid) {
            throw new Error('Error: Invalid Fen. Fen=\'' + fen
                + '\', error=' + r.error);
        }
        console.log('fen is valid');
        this.chess.load(fen);
        // Set board pieces to be the same
        this.positionPieces();

        // Reminder of how to iterate through a Map:
        // this.squaresMap.forEach((cs: ChessSquare, key: string) => {
        // });
    }

    // Puts the pieces on the board in line with the chess position
    public positionPieces() {
        // console.log("positionPieces called");
        for (const key of Object.keys(this.chess.SQUARES)) {
            const coord: string = key;
            const index: number = this.chess.SQUARES[key];
            const piece: ChessPiece = this.chess.board[index];
            const cs = this.squaresMap.get(coord);
            // console.log("coord: " + coord
            // + ", index: " + index
            // );
            if ((typeof piece) !== 'undefined'
                && piece !== undefined) {
                // console.log("piece: " + piece.type
                // + ", piece colour: " + piece.color);
                // if (cs.pieceColour != piece.color
                //  || cs.pieceType != piece.type) {
                cs.pieceColour = piece.color;
                cs.pieceType = piece.type;
                // }

            } else {
                // console.log("empty square");
                cs.removePiece();
            }

        }
    }

    ngOnInit() {

        window.addEventListener('resize', ($event) => {
            this.calculateSizes();
        });

    } // end of ngOnInit

    private calculateSizes() {
        if (window.innerHeight > window.innerWidth) {
            this.wholeSize = 280;
        } else {
            this.wholeSize = 400;
        }
        this.squareSize = this.wholeSize / 8;
        this.resize.emit();
    }

    mouseMove(event: MouseEvent) {
        this.mouseMoveLocal.emit(event);
    }

    mouseLeave(event: MouseEvent) {
        // console.log("mouse leave event occurred");
    }

    mouseUp(event: MouseEvent) {

        if (this.moving) {
            let column =
                files[Math.floor(event.offsetX / this.squareSize)];
            let row = 8 - Math.floor(event.offsetY / this.squareSize);
            if (this.boardSide === Colour.BLACK) {
                const columnNumber = 7 - files.indexOf(column);
                column = files[columnNumber];
                row = 9 - row;
            }

            const coord = column + row.toString();
            // console.log("mouse released at " + coord);
            this.mouseUpLocal.emit(event);
            this.moving = false;
            // check whether the move is valid
            const move = new Move(this.movingFrom.coordinate,
                coord);
            const chessMove = this.chess.move(move);
            // console.log("chessmove: " + JSON.stringify(chessMove));
            if (chessMove === undefined) {
                this.positionPieces();
                console.log('invalid move');
            } else { // valid move
                this.moveMade.emit(move);
                // this.movePiece(this.movingFrom, this.squaresMap.get(coord));
                // this.flipBoard();
                // console.log(this.chess.fen);
            }
        }
    }

} // End of class TrainerComponent

