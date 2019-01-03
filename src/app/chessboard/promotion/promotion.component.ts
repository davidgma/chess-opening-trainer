import { Component, OnInit } from '@angular/core';
import { PieceType } from '../chess-enums';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  showMe = false;
  
  constructor() { }
  
  ngOnInit() {
  }
  
  public async getPromotedPiece(): Promise<PieceType> {
    let p = new Promise<PieceType>((resolve) => {
      resolve(PieceType.QUEEN);
    });
    return p;
  }

} // end of class
