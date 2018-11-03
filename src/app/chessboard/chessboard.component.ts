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
        window.addEventListener("resize", ($event) => {
            this.cd.detectChanges();
        });

    } // end of ngOnInit

    // this is needed in the component because the template
    // needs it to calculate the total svg size of the area.
    get squareSize(): number {
       let ss = 50;
        return ss;
    }

    get viewBox(): string {
        let vb = "0 0 800 800"
        if (window.innerHeight > window.innerWidth) {
            console.log("window.innerWidth=" + window.innerWidth);
            let factor = 1.7;
            vb = "0 0 " 
            
            + (window.innerWidth * factor).toString()
            + " " + (window.innerWidth * factor).toString();
            
        }
        else {
            console.log("window.innerHeight=" + window.innerHeight);
            let factor = 1.7;
            vb = "0 0 " 
            + (window.innerHeight * factor).toString()
            + " " + (window.innerHeight * factor).toString();
        }
        return vb
    }

    mouseMove(event: MouseEvent) {
        console.log("mouse moved");
    }



    mouseLeave(event: MouseEvent) {
        console.log("mouse leave event occurred");
    }


} // End of class TrainerComponent

