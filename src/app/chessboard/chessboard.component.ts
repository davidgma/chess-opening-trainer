import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { ChessSquare } from './chess-square';



@Component({
    selector: 'chessboard',
    templateUrl: './chessboard.component.html',
    styleUrls: ['./chessboard.component.css']
})
export class ChessboardComponent implements OnInit {

    public squaresMap = new Map<string, ChessSquare>();

    constructor(private cd: ChangeDetectorRef) {
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                let coord = ChessSquare.files[i]
                    + (j + 1).toString();
                let cs = new ChessSquare(coord);
                cs.squareSize = this.squareSize;
                cs.init();
                this.squaresMap.set(coord, cs);
            }
        }
    }

    ngOnInit() {

    } // end of ngOnInit

    // this is needed in the component because the template
    // needs it to calculate the total svg size of the area.
    get squareSize(): number {
        let ss = 50;
        if (window.innerHeight > window.innerWidth) {
            ss = Math.round((window.innerWidth * .85) / 8)
        }
        else {
            ss = Math.round((window.innerHeight * .9) / 8)
        }
        // ss = ss / 1.5;
        //console.log("squareSize: " + ss.toString());
        return ss;
    }

    mouseMove(event: MouseEvent) {
        console.log("mouse moved");
    }

   

    mouseLeave(event: MouseEvent) {
        console.log("mouse leave event occurred");
    }


} // End of class TrainerComponent

