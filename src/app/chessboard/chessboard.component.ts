import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChangeDetectorRef, EventEmitter } from '@angular/core';
import { ChessSquare } from './chess-square';



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

    // this is needed in the component because the template
    // needs it to calculate the total svg size of the area.
    public squareSize: number;
    public wholeSize: number;

    constructor(private cd: ChangeDetectorRef) {
        this.calculateSizes();
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                let coord = ChessSquare.files[i]
                    + (j + 1).toString();
                let cs = new ChessSquare(coord, this);
                cs.init();
                this.squaresMap.set(coord, cs);
            }
        }
    }

    public resize = new EventEmitter<void>();;

    ngOnInit() {
        
        window.addEventListener("resize", ($event) => {
            this.calculateSizes();
            // this.squaresMap.forEach((value: ChessSquare, key: string) => {
            //     value.adjustPosition();
            // });
            // if (!this.cd['destroyed']) {
            //     this.cd.detectChanges();
            // }
            //this.cd.detectChanges();
        });

    } // end of ngOnInit

    private calculateSizes() {
        if (window.innerHeight > window.innerWidth) {
            // console.log("window.innerWidth=" + window.innerWidth);
            //this.wholeSize = window.innerWidth * .8;
            this.wholeSize = 280;
        }
        else {
            // console.log("window.innerHeight=" + window.innerHeight);
            // this.wholeSize = window.innerHeight;
            this.wholeSize = 400;
        }
        this.squareSize = this.wholeSize / 8;
        // console.log("Sizes calculated: wholeSize: " + this.wholeSize
        // + ". SquareSize: " + this.squareSize);
        this.resize.emit();
    }

    get viewBox(): string {
        // console.log("In get viewBox. wholeSize=" + this.wholeSize);
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
        console.log("in mouseUp event comp");
        if (this.moving) {
            this.mouseUpLocal.emit(event);
            //console.log("mouse released for " + this.coordinate);
            this.moving = false;
        }
    }


} // End of class TrainerComponent

