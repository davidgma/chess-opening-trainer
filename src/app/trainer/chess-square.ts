/* 
A ChessSquare object represents a single square on the chessboard.
It's used by the trainer.component which has a Map of the square
coordinate e.g. a1 and the ChessSquare object.
The ChessSquare object holds the colour of the square and the
piece, if any, on the square and the colour of that piece.
The piece is represented by an SvgData object which contains an
array for svg path tags and an array for svg circle tags.

trainer component
- squaresMap: Map<string, ChessSquare>()

ChessSquare
- svgData: SvgData

SvgData
- paths: Array<SvgPath>
*/

import { SvgData, SvgPath, SvgCircle } from './svg-data';

export enum Colour {
    black,
    white
}

export enum Piece {
    king,
    queen,
    rook,
    bishop,
    knight,
    pawn
}

export class ChessSquare {
    public static files = ["a", "b", "c", "d", "e", "f", "g", "h"];
    public svgX: number;
    public svgY: number;
    public squareColour: Colour;
    public pieceColour: Colour = Colour.white;

    // coordinate must be in form a1
    constructor(public coordinate: string, public squareSize: number) {
        this.svgX = ChessSquare.files.indexOf(coordinate[0]);
        let row = Number.parseInt(coordinate[1]);
        this.svgY = 8 - row;
        if (this.isEven(this.svgX)) {
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
                    sd = this.blackPawn;
                break;
            case Piece.king:
                if (this.pieceColour == Colour.black)
                    sd = this.blackKing;
                break;
            case Piece.queen:
                if (this.pieceColour == Colour.black)
                    sd = this.blackQueen;
                break;
        }
        // Adjust svg values for actual placement of the square 
        for (let sp of sd.paths) {
            this.svgData.paths.push(new SvgPath(this.addXY(sp.d), sp.className));
        }
        for (let c of sd.circles) {
            this.svgData.circles.push(new SvgCircle(
                c.cx + this.svgX * this.squareSize,
                c.cy + this.svgY * this.squareSize,
                c.r,
                c.className
            ));
        }
        this._piece = value;
    }

    private addXY(d: string) {
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
                        + (this.svgX * this.squareSize)).toString() + ",";
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
                        + (this.svgY * this.squareSize)).toString() + " ";
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

    get blackPawn(): SvgData {
        let ret = new SvgData();
        ret.paths.push(new SvgPath("M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z",
            "black-piece black-body"));
        return ret;
    }


    get blackKing(): SvgData {
        let ret = new SvgData();
        ret.paths.push(new SvgPath("M 22.5,11.63 L 22.5,6 ",
            "black-piece"));

        ret.paths.push(new SvgPath("M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25 ",
            "black-body"));

        ret.paths.push(new SvgPath("M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z",
            "black-body"));

        ret.paths.push(new SvgPath("M 20,8 L 25,8 ",
            "black-piece"));

        ret.paths.push(new SvgPath("M 32,29.5 C 32,29.5 40.5,25.5 38.03,19.85 C 34.15,14 25,18 22.5,24.5 L 22.51,26.6 L 22.5,24.5 C 20,18 9.906,14 6.997,19.85 C 4.5,25.5 11.85,28.85 11.85,28.85 ",
            "black-piece white-line"));

        ret.paths.push(new SvgPath("M 11.5,30 C 17,27 27,27 32.5,30 M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5 M 11.5,37 C 17,34 27,34 32.5,37 ",
            "black-piece white-line"));
        return ret;
    }

    get blackQueen(): SvgData {
        let ret = new SvgData();
        ret.paths.push(new SvgPath("M 9,26 C 17.5,24.5 30,24.5 36,26 L 38.5,13.5 L 31,25 L 30.7,10.9 L 25.5,24.5 L 22.5,10 L 19.5,24.5 L 14.3,10.9 L 14,25 L 6.5,13.5 L 9,26 z",
            "black-body"));
        ret.paths.push(new SvgPath("M 9,26 C 9,28 10.5,28 11.5,30 C 12.5,31.5 12.5,31 12,33.5 C 10.5,34.5 10.5,36 10.5,36 C 9,37.5 11,38.5 11,38.5 C 17.5,39.5 27.5,39.5 34,38.5 C 34,38.5 35.5,37.5 34,36 C 34,36 34.5,34.5 33,33.5 C 32.5,31 32.5,31.5 33.5,30 C 34.5,28 36,28 36,26 C 27.5,24.5 17.5,24.5 9,26 z",
            "black-body"));
        ret.paths.push(new SvgPath("M 11,38.5 A 35,35 1 0 0 34,38.5 ",
                "black-piece"));
        ret.paths.push(new SvgPath("M 11,29 A 35,35 1 0 1 34,29 ",
            "black-piece  white-line"));
        ret.paths.push(new SvgPath("M 12.5,31.5 L 32.5,31.5 ",
            "black-piece  white-line"));
        ret.paths.push(new SvgPath("M 11.5,34.5 A 35,35 1 0 0 33.5,34.5 ",
            "black-piece  white-line"));
        ret.paths.push(new SvgPath("M 10.5,37.5 A 35,35 1 0 0 34.5,37.5 ",
            "black-piece  white-line"));
        ret.circles.push(new SvgCircle(6, 12, 2.75, "black-piece"));
        ret.circles.push(new SvgCircle(14, 9, 2.75, "black-piece"));
        ret.circles.push(new SvgCircle(22.5, 8, 2.75, "black-piece"));
        ret.circles.push(new SvgCircle(31, 9, 2.75, "black-piece"));
        ret.circles.push(new SvgCircle(39, 12, 2.75, "black-piece"));
        return ret;
    }
}

