/* 
A ChessSquare object represents a single square on the chessboard.
It keeps track of what piece is on it.
*/

import { SvgData, SvgPath, SvgCircle, SvgPieces } from './svg-data';
import { Colour, PieceType, files } from './chess-enums';
import { ChessboardComponent } from './chessboard.component';
//import { EventEmitter } from '@angular/core';

export class ChessSquare {

    public squareColour: Colour;
    public pieceColour: Colour = Colour.WHITE;
    public row: number;
    public column: number;
    public scale: number; // amount to scale pieces by
    public transform: string; // transform applied to whole piece
    public svgData = new SvgData();

    // coordinate must be in form a1
    constructor(public coordinate: string, public parent: ChessboardComponent) {
        // Listen for a change in screen size
        this.parent.resize.subscribe(() => {
            this.adjustPosition();
        });

        this.calculateRowColumn();
        this.adjustPosition();
    }

    public calculateRowColumn() {
        // Work out which vertical column (file) of the board the square is on (0 - 7)
        this.column = files.indexOf(this.coordinate[0]);
        if (this.parent.boardSide == Colour.BLACK) {
            this.column = 7 - this.column;
        }
        // Work out which horizontal row of the board the the square is on (1 - 8)
        this.row = Number.parseInt(this.coordinate[1]);
        if (this.parent.boardSide == Colour.BLACK) {
            this.row = 9 - this.row;
        }
                // console.log("coord: " + coordinate + ", column: " + this.column
        // + ", row:" + this.row);

    }

    // Where the piece starts in the svg region
    get pieceXOffset(): number {
        return this.squareXOffset / this.scale;
    }
    get pieceYOffset(): number {
        return this.squareYOffset / this.scale;
    }

    // Where the square starts in the svg region
    get squareXOffset(): number {
        return this.column * this.parent.squareSize;
    }
    get squareYOffset(): number {
        return (8 - this.row) * this.parent.squareSize;
    }


    adjustPosition() {
        // Change the starting position to be in the right square.
        this.scale = this.parent.wholeSize / 400;
        this.transform = "scale(" + this.scale.toString()
            + "," + this.scale.toString() + ")";
        this.movePiece(this.pieceXOffset, this.pieceYOffset);
    }

    init() {
        // work out whether it's a dark or light square
        if (this.isEven(this.column)) {
            if (this.isEven(this.row)) {
                this.squareColour = Colour.WHITE;
            }
            else {
                this.squareColour = Colour.BLACK;
            }
        }
        else {
            if (this.isEven(this.row)) {
                this.squareColour = Colour.BLACK;
            }
            else {
                this.squareColour = Colour.WHITE;
            }
        }
    }


    isEven(num): boolean {
        return (num % 2) == 0;
    }

    get cssClass(): string {
        return "chess-square-"
            + ((this.squareColour == Colour.WHITE) ? "white" : "black");
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

    private _pieceType: PieceType;
    get pieceType(): PieceType {
        return this._pieceType;
    }
    set pieceType(value: PieceType) {
        this.svgData = new SvgData();
        let sd = new SvgData();
        switch (value) {
            case PieceType.PAWN:
                if (this.pieceColour == Colour.BLACK)
                    sd = SvgPieces.blackPawn;
                else
                    sd = SvgPieces.whitePawn;
                break;
            case PieceType.KING:
                if (this.pieceColour == Colour.BLACK)
                    sd = SvgPieces.blackKing;
                else
                    sd = SvgPieces.whiteKing;
                break;
            case PieceType.QUEEN:
                if (this.pieceColour == Colour.BLACK)
                    sd = SvgPieces.blackQueen;
                else
                    sd = SvgPieces.whiteQueen;
                break;
            case PieceType.ROOK:
                if (this.pieceColour == Colour.BLACK)
                    sd = SvgPieces.blackRook;
                else
                    sd = SvgPieces.whiteRook;
                break;
            case PieceType.BISHOP:
                if (this.pieceColour == Colour.BLACK)
                    sd = SvgPieces.blackBishop;
                else
                    sd = SvgPieces.whiteBishop;
                break;
            case PieceType.KNIGHT:
                if (this.pieceColour == Colour.BLACK)
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
        this._pieceType = value;
    }

    public removePiece() {
        this.svgData = new SvgData();
        this._pieceType = null;
        //console.log("piece removed from " + this.coordinate);
    }

    // // called after an invalid move and flip of board side
    // public moveBack() {
    //     let initialColour = this.pieceColour;
    //     let initialType = this.pieceType;
    //     this.svgData = new SvgData();
    //     this.pieceColour = initialColour;
    //     this.pieceType = initialType;
    // }

    // Moves the piece relative to its original position
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
    mouseDown(eventD: MouseEvent) {

        //console.log("mouse pressed down for " + this.coordinate);
        let initialClientX = eventD.clientX;
        let initialClientY = eventD.clientY;
        this.parent.moving = true;
        this.parent.movingFrom = this;
        // subscribe to the move event from the parent
        let sub = this.parent.mouseMoveLocal.subscribe((eventM) => {
            this.movePiece(
                this.pieceXOffset + eventM.clientX - initialClientX,
                this.pieceYOffset + eventM.clientY - initialClientY);
        });

        // subscribe to the mouse up event
        let sub2 = this.parent.mouseUpLocal.subscribe((eventU) => {
            //console.log("mouseUp local event received");
            sub.unsubscribe();
            sub2.unsubscribe();
        });

    }

    // The mouseUp event can happen anywhere on the board but
    // should only do something when a piece is being moved
    mouseUp(event: MouseEvent) {
        //console.log("mouse released for " + this.coordinate);
    }

} // End of ChessSquare class

