import { Component, OnInit, EventEmitter } from '@angular/core';
import { PieceType, files, IChessBoardParent, Colour } from '../chess-enums';
import { ChessSquare } from '../chess-square';


@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit, IChessBoardParent {

  public wholeSize: number;
  public squareSize: number;
  public showMe = false;
  public squaresMap = new Map<string, ChessSquare>();
  public resize = new EventEmitter<void>();
  public boardSide: Colour = Colour.WHITE;

  // The following aren't needed except for conforming to 
  // IChessBoardParent because the pieces in the promotion square
  // won't be moved.
  public moving: boolean;
  public movingFrom: ChessSquare;
  public mouseMoveLocal: EventEmitter<MouseEvent>;
  public mouseUpLocal: EventEmitter<MouseEvent>;
  public touchMoveLocal: EventEmitter<TouchEvent>;
  public touchEndLocal: EventEmitter<TouchEvent>;


  constructor() {
    this.calculateSizes();
    const promotionSquares = ['a8', 'a7', 'a6', 'a5'];
    for (let coord of promotionSquares) {
      const cs = new ChessSquare(coord, this);
      cs.init();
      this.squaresMap.set(coord, cs);
    }
  }

  ngOnInit() {
  }

  public async getPromotedPiece(): Promise<PieceType> {
    let p = new Promise<PieceType>((resolve) => {
      resolve(PieceType.QUEEN);
    });
    return p;
  }

  private calculateSizes() {
    if (window.innerHeight > window.innerWidth) {
      this.wholeSize = 280;
    } else {
      this.wholeSize = 400;
    }
    this.squareSize = this.wholeSize / 8;
    this.resize.emit();
  }

} // end of class
