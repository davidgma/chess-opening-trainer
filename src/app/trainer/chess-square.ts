export class ChessSquare {
    public static files = ["a", "b", "c", "d", "e", "f", "g", "h"];
    public svgX: number;
    public svgY: number;
    public isWhite: boolean;

    // coordinate must be in form a1
    constructor(public coordinate: string, public squareSize: number) {
        this.svgX = ChessSquare.files.indexOf(coordinate[0]);
        let row = Number.parseInt(coordinate[1]);
        this.svgY = 8 - row;
        if ( this.isEven(this.svgX) ) {
            if (this.isEven(row)) {
                this.isWhite = true;
            }
            else {
                this.isWhite = false;
            }
        } 
        else {
            if (this.isEven(row)) {
                this.isWhite = false;
            }
            else {
                this.isWhite = true;
            }
        }
        
        //this.toString();
        //console.log(this.addXY(this.pawn));
    }

    isEven(num): boolean { 
        return (num % 2) == 0;
    }

    get cssClass(): string {
        return "chess-square-" + (this.isWhite ? "white": "black");
    }

    /*
    private toString() {
        console.log("toString called");
        return this.coordinate + ". "
        + "svgX=" + this.svgX + ". "
        + "svgY=" + this.svgY + ". "
        + "colour=" + (this.isWhite ? "white": "black") + ". "
        ;
    }
    */

    get svgPiece(): Array<string> {
        let ret = new Array<string>();
        for (let s of this.king) {
            ret.push(this.addXY(s));
        }
        return ret;
    }

    private addXY(d: string) {
        let ret: string = "";
        let inXNumber = false;
        let inYNumber = false;
        let coord = "";
        for (let i = 0; i < d.length; i++) {
            let char = d[i];
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

    get pawn(): Array<string> {
        let ret = new Array<string>();
        ret.push("M 22,9 C 19.79,9 18,10.79 18,13 C 18,13.89 18.29,14.71 18.78,15.38 C 16.83,16.5 15.5,18.59 15.5,21 C 15.5,23.03 16.44,24.84 17.91,26.03 C 14.91,27.09 10.5,31.58 10.5,39.5 L 33.5,39.5 C 33.5,31.58 29.09,27.09 26.09,26.03 C 27.56,24.84 28.5,23.03 28.5,21 C 28.5,18.59 27.17,16.5 25.22,15.38 C 25.71,14.71 26,13.89 26,13 C 26,10.79 24.21,9 22,9 z");
        return ret;
    } 


    get king(): Array<string> {
        let ret = new Array<string>();
        ret.push("M 22.5,11.63 L 22.5,6 z");
        ret.push("M 20,8 L 25,8 z");
        ret.push("M 22.5,25 C 22.5,25 27,17.5 25.5,14.5 C 25.5,14.5 24.5,12 22.5,12 C 20.5,12 19.5,14.5 19.5,14.5 C 18,17.5 22.5,25 22.5,25 z");
        ret.push("M 11.5,37 C 17,40.5 27,40.5 32.5,37 L 32.5,30 C 32.5,30 41.5,25.5 38.5,19.5 C 34.5,13 25,16 22.5,23.5 L 22.5,27 L 22.5,23.5 C 19,16 9.5,13 6.5,19.5 C 3.5,25.5 11.5,29.5 11.5,29.5 L 11.5,37 z ");
        ret.push("M 11.5,30 C 17,27 27,27 32.5,30 z");
        ret.push("M 11.5,33.5 C 17,30.5 27,30.5 32.5,33.5 z");
        ret.push("M 11.5,37 C 17,34 27,34 32.5,37 z");
        return ret;
    } 
}