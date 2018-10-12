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
  public board1: ChessBoardInstance;

  constructor(private cd: ChangeDetectorRef,
    public gauth: GoogleAuthService) {
    this.output = "this is very much work-in-progress.";
    this.board1 = ChessBoard('board1', 'start');
  }

  ngOnInit() { }

  
} // End of class TrainerComponent