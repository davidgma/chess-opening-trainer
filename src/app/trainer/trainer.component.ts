import { Component, OnInit } from '@angular/core';
import { TrainerRequest } from './trainer-request';
import { ChangeDetectorRef } from '@angular/core';
import { GoogleAuthService } from '../google-auth.service';
import { ChessBoard, ChessBoardInstance } from 'chessboardjs';

@Component({
  selector: 'app-simple',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  public model = new TrainerRequest();
  public output: string;
  public board: ChessBoardInstance;

  constructor(private cd: ChangeDetectorRef,
    public gauth: GoogleAuthService) {
    this.output = "this is very much work-in-progress.";
    
  }

  ngOnInit() {
    //this.board = 
    ChessBoard('board', {'position': 'start'});

   }

  
} // End of class TrainerComponent