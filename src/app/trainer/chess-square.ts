export class ChessSquare {
    public static files = ["a", "b", "c", "d", "e", "f", "g", "h"];
    public svgX: number;
    public svgY: number;
    public isWhite: boolean;

    // coordinate must be in form a1
    constructor(public coordinate: string) {
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
        
        this.toString();
    }

    isEven(num): boolean { 
        return (num % 2) == 0;
    }

    get cssClass(): string {
        return "chess-square-" + (this.isWhite ? "white": "black");
    }

    toString() {
        console.log(this.coordinate + ". "
        + "svgX=" + this.svgX + ". "
        + "svgY=" + this.svgY + ". "
        + "colour=" + (this.isWhite ? "white": "black") + ". "
        );
    }
}