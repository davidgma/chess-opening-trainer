/* 
A ChessSquare object represents a single square on the chessboard.
It keeps track of what piece is on it.
*/

import { SvgData, SvgPath, SvgCircle, SvgPieces } from './svg-data';
//import { ChessboardComponent} from './chessboard.component';
import { Colour, Piece} from './chess-enums';



export class ChessSquare {
    public static files = ["a", "b", "c", "d", "e", "f", "g", "h"];
    public squareColour: Colour;
    public pieceColour: Colour = Colour.white;
    public squareSize = 50;
    public svgXOffset: number;
    public svgYOffset: number;

    // coordinate must be in form a1
    constructor(public coordinate: string) {
        //console.log("window width = " + window.innerWidth);
        //console.log("window height = " + window.innerHeight);
        
    }

    init() {
        // Work out which vertical row (file) of the board the square is on (1 - 8)
        let file = ChessSquare.files.indexOf(this.coordinate[0]);
        this.svgXOffset = file * this.squareSize;
        // Work out which horizontal row of the board the the square is on (1 - 8)
        let row = Number.parseInt(this.coordinate[1]);
        this.svgYOffset = (8 - row) * this.squareSize;
        if (this.isEven(file)) {
            if (this.isEven(row)) {
                this.squareColour = Colour.white;
            }
            else {
                this.squareColour = Colour.black;
            }
        }
        else {
            if (this.isEven(row)) {
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
        // Resize the piece relative to a standard of 50
        this.resizePiece(this.squareSize/50);
        // Change the starting position to be in the right square.
        this.movePiece(this.svgXOffset, this.svgYOffset);
        this._piece = value;
    }

    private movePiece(x: number, y: number) {
        // Adjust svg values for actual placement of the square
        for (let sp of this.svgData.paths) {
            sp.d = this.incrementXY(sp.d, x, y);
        }
        for (let c of this.svgData.circles) {
            c.cx += x;
            c.cy += y;
        }
    }

    // todo: need to fix the translates for the white queen
    private resizePiece(ratio: number) {

        for (let sp of this.svgData.paths) {
            sp.d = this.resizeXY(sp.d, ratio);
        }
        for (let c of this.svgData.circles) {
            c.cx *= ratio;
            c.cy *= ratio;
        }
    }

    private incrementXY(d: string, x: number, y: number) {
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

    private resizeXY(d: string, ratio: number) {
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
                        * ratio).toString() + ",";
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
                       * ratio).toString() + " ";
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

    mouseDown(event: MouseEvent) {
        console.log("mouse pressed down for " + this.coordinate);
        //console.log("target: " + event.target);

    }

    mouseUp(event: MouseEvent) {
        console.log("mouse released for " + this.coordinate);
    }

} // End of ChessSquare class

