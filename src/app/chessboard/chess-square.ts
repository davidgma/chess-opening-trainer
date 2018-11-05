/* 
A ChessSquare object represents a single square on the chessboard.
It keeps track of what piece is on it.
*/

import { SvgData, SvgPath, SvgCircle, SvgPieces } from './svg-data';
//import { ChessboardComponent} from './chessboard.component';
import { Colour, Piece } from './chess-enums';
import { ChessboardComponent } from './chessboard.component';
import { EventEmitter } from '@angular/core';



export class ChessSquare {
    public static files = ["a", "b", "c", "d", "e", "f", "g", "h"];
    public squareColour: Colour;
    public pieceColour: Colour = Colour.white;
    //public svgXOffset: number;
    //public svgYOffset: number;
    public row: number;
    public column: number;
    public scale: number; // amount to scale pieces by
    public transform: string; // transform applied to whole piece
    //private mouseUpLocal = new EventEmitter<MouseEvent>();

    // coordinate must be in form a1
    constructor(public coordinate: string, public parent: ChessboardComponent) {
        // Work out which vertical column (file) of the board the square is on (1 - 8)
        this.column = ChessSquare.files.indexOf(this.coordinate[0]);
        // Work out which horizontal row of the board the the square is on (1 - 8)
        this.row = Number.parseInt(this.coordinate[1]);
        this.adjustPosition();
        // Listen for a change in screen size
        this.parent.resize.subscribe(() => {
            this.adjustPosition();
        });
    }

    get pieceXOffset(): number {
        return this.column
            * this.parent.squareSize
            / this.scale;
    }

    get pieceYOffset(): number {
        return (8 - this.row)
            * this.parent.squareSize
            / this.scale;
    }

    get squareXOffset(): number {
        return this.column * this.parent.squareSize;
    }

    get squareYOffset(): number {
        return (8 - this.row) * this.parent.squareSize;
    }


    adjustPosition() {
        // console.log("in adjust position");
        // Change the starting position to be in the right square.
        this.scale = this.parent.wholeSize / 400;
        this.transform = "scale(" + this.scale.toString()
            + "," + this.scale.toString() + ")";
        this.movePiece(this.pieceXOffset, this.pieceYOffset);

    }

    init() {
        if (this.isEven(this.column)) {
            if (this.isEven(this.row)) {
                this.squareColour = Colour.white;
            }
            else {
                this.squareColour = Colour.black;
            }
        }
        else {
            if (this.isEven(this.row)) {
                this.squareColour = Colour.black;
            }
            else {
                this.squareColour = Colour.white;
            }
        }
    }


    isEven(num): boolean {
        return (num % 2) == 0;
    }

    get cssClass(): string {
        return "chess-square-"
            + ((this.squareColour == Colour.white) ? "white" : "black");
    }

    /*
    private toString() {
        console.log("toString called");
        return this.coordinate + ". "
        + "svgX=" + this.svgX + ". "
        + "svgY=" + this.svgY + ". "
        + "colour=" + (this.isWhite ? "white": "black") + ". "
        ;
    } */

    public svgData = new SvgData();


    private _piece: Piece;
    get piece(): Piece {
        return this._piece;
    }
    set piece(value: Piece) {
        this.svgData = new SvgData();
        let sd = new SvgData();
        switch (value) {
            case Piece.pawn:
                if (this.pieceColour == Colour.black)
                    sd = SvgPieces.blackPawn;
                else
                    sd = SvgPieces.whitePawn;
                break;
            case Piece.king:
                if (this.pieceColour == Colour.black)
                    sd = SvgPieces.blackKing;
                else
                    sd = SvgPieces.whiteKing;
                break;
            case Piece.queen:
                if (this.pieceColour == Colour.black)
                    sd = SvgPieces.blackQueen;
                else
                    sd = SvgPieces.whiteQueen;
                break;
            case Piece.rook:
                if (this.pieceColour == Colour.black)
                    sd = SvgPieces.blackRook;
                else
                    sd = SvgPieces.whiteRook;
                break;
            case Piece.bishop:
                if (this.pieceColour == Colour.black)
                    sd = SvgPieces.blackBishop;
                else
                    sd = SvgPieces.whiteBishop;
                break;
            case Piece.knight:
                if (this.pieceColour == Colour.black)
                    sd = SvgPieces.blackKnight;
                else
                    sd = SvgPieces.whiteKnight;
                break;
        }

        // copy the piece svg data to internal svgData variable
        for (let sp of sd.paths) {
            let svp = new SvgPath(sp.d, sp.className);
            svp.transform = sp.transform;
            this.svgData.paths.push(svp);
        }
        for (let c of sd.circles) {
            this.svgData.circles.push(new SvgCircle(
                c.cx,
                c.cy,
                c.r,
                c.className
            ));
        }
        this.adjustPosition();
        this._piece = value;
    }

    private movePiece(x: number, y: number) {
        // Adjust svg values for actual placement of the square
        for (let sp of this.svgData.paths) {
            sp.d = this.incrementDXY(sp.origD, x, y);
        }
        for (let c of this.svgData.circles) {
            c.cx = c.origCx + x;
            c.cy = c.origCy + y;
        }
    }




    private incrementDXY(d: string, x: number, y: number): string {
        let ret: string = "";
        let inXNumber = false;
        let inYNumber = false;
        let coord = "";
        for (let i = 0; i < d.length; i++) {
            let char = d[i];
            if (char == "A") {
                // Elliptical arc, only adjust the last set of coords
                // Move forward to the 5th space
                ret += char;
                let spaceCount = 0;
                while (spaceCount < 5) {
                    i++;
                    char = d[i];
                    ret += char;
                    if (char == " ") {
                        spaceCount++;
                    }
                }
            }
            if (inXNumber) {
                if (char == ",") {
                    ret += (Number.parseFloat(coord)
                        + x).toString() + ",";
                    inXNumber = false;
                    inYNumber = true;
                    coord = "";
                }
                else {
                    coord += char;
                }
            }
            else if (inYNumber) {
                if (char == " ") {
                    ret += (Number.parseFloat(coord)
                        + y).toString() + " ";
                    inYNumber = false;
                    coord = "";
                }
                else {
                    coord += char;
                }
            }
            else if (isNaN(Number.parseInt(char))) {
                ret += char;
            }
            else {
                inXNumber = true;
                coord = char;
            }
        }
        return ret;
    }

    // The mouseDown event is only activated for a chess piece, so
    // in effect it always signals the start of the move of a piece
    mouseDown(event: MouseEvent) {
        console.log("mouse pressed down for " + this.coordinate);
        this.parent.moving = true;
        // subscribe to the move event from the parent
        let sub = this.parent.mouseMoveLocal.subscribe((event) => {
            console.log("mouse moved local");
        });

        // subscribe to the mouse up event
        let sub2 = this.parent.mouseUpLocal.subscribe((event) => {
            //console.log("mouseUp local event received");
            sub.unsubscribe();
            sub2.unsubscribe();
        });

    }

    // The mouseUp event can happen anywhere on the board but
    // should only do something when a piece is being moved
    mouseUp(event: MouseEvent) {
        if (this.parent.moving) {
            this.parent.mouseUpLocal.emit(event);
            console.log("mouse released for " + this.coordinate);
            this.parent.moving = false;
        }
    }

} // End of ChessSquare class

