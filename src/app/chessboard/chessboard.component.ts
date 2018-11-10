/// //<reference path="./chess.d.ts" />
/// //<reference path="./test.d.ts" />

import { Component, OnInit, OnDestroy, SystemJsNgModuleLoader } from '@angular/core';
import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { ChessSquare } from './chess-square';
import { files } from './chess-enums';
import { Chess } from './chess';

@Component({
    selector: 'chessboard',
    templateUrl: './chessboard.component.html',
    styleUrls: ['./chessboard.component.css']
})
export class ChessboardComponent implements OnInit {

    public squaresMap = new Map<string, ChessSquare>();
    public mouseMoveLocal = new EventEmitter<MouseEvent>();
    public mouseUpLocal = new EventEmitter<MouseEvent>();
    public moving = false;
    public movingFrom: ChessSquare;

    // this is needed in the component because the template
    // needs it to calculate the total svg size of the area.
    public squareSize: number;
    public wholeSize: number;

    constructor(private cd: ChangeDetectorRef) {
        this.calculateSizes();
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                let coord = files[i]
                    + (j + 1).toString();
                let cs = new ChessSquare(coord, this);
                cs.init();
                this.squaresMap.set(coord, cs);
            }
        }
        // https://github.com/jhlywa/chess.js
        let chess = new Chess();
        console.log("fen: " + chess.fen);
    }

    public resize = new EventEmitter<void>();;

    ngOnInit() {

        window.addEventListener("resize", ($event) => {
            this.calculateSizes();
        });

    } // end of ngOnInit

    private calculateSizes() {
        if (window.innerHeight > window.innerWidth) {
            this.wholeSize = 280;
        }
        else {
            this.wholeSize = 400;
        }
        this.squareSize = this.wholeSize / 8;
        this.resize.emit();
    }

    get viewBox(): string {
        return "0 0 "
            + (this.wholeSize).toString()
            + " " + (this.wholeSize).toString();

    }

    mouseMove(event: MouseEvent) {
        this.mouseMoveLocal.emit(event);
    }

    mouseLeave(event: MouseEvent) {
        //console.log("mouse leave event occurred");
    }

    mouseUp(event: MouseEvent) {

        if (this.moving) {
            let column = files[Math.floor(event.offsetX / this.squareSize)];
            let row = 8 - Math.floor(event.offsetY / this.squareSize);
            let coord = column + row.toString();
            console.log("mouse released at " + coord);
            this.mouseUpLocal.emit(event);
            this.moving = false;
            this.movePiece(this.movingFrom, this.squaresMap.get(coord));
        }
    }

    movePiece(from: ChessSquare, to: ChessSquare) {
        console.log("moving from " + from.coordinate
            + " to " + to.coordinate);
        to.pieceColour = from.pieceColour;
        to.piece = from.piece;
        from.removePiece();
    }


} // End of class TrainerComponent

