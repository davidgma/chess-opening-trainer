import { Injectable } from '@angular/core';
import { Move } from '../app/chessboard/chess-enums';

export class Step {
    // move e.g. d2d4
    // comment on the move
    constructor(public move: Move, public comment: string) { }
}

export class Sequence {
    name: string; // name of the sequence
    fen: string; // initial fen position
    steps: Array<Step> = new Array<Step>(); // array of steps in the sequence

    public addStep(move: string, comment: string) {
        const m = new Move(move.substr(0, 2), move.substr(2, 2));
        const s = new Step(m, comment);
        this.steps.push(s);

    }
}

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public sequencies = new Array<Sequence>();
    constructor() {
        this.addBasicSequencies();
    }

    private addBasicSequencies() {
        let name, fen, moves;
        name = 'Sicilian Dragon Initial';
        fen = 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1';
        moves = 'c7c5,g1f3,d7d6,d2d4,c5d4,f3d4,g8f6,b1c3,g7g6,c1e3,f8g7,f2f3,b8c6,d1d2,e8g8,f1c4,c8d7,e1c1,c6e5,c4b3';
        this.addSequence(name, fen, moves);
        name = 'Sicilian Dragon Bishop Advance';
        fen = 'r2q1rk1/pp1bppbp/3p1np1/4n3/3NP3/1BN1BP2/PPPQ2PP/2KR3R b - - 8 11';
        moves = 'a8c8,e3h6,g7h6,d2h6,c8c3,b2c3,a7a5,a2a4,d8c7,h6e3,c7c5,c1d2,d7a4,d1a1,a4b3,c2b3,d6d5';
        this.addSequence(name, fen, moves);
        name = 'Semi-Slav Be7';
        fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
        moves = 'd2d4,d7d5,g1f3,g8f6,c2c4,c7c6,b1c3,e7e6,c1g5,f8e7,e2e3,e8g8,d1c2,b8d7,e1c1,f8e8,c1b1,a7a6,h2h4,b7b5,c4c5,b5b4,c3a4,a6a5,g5f6,e7f6,f3g5,d7f8,f1d3,g7g6,a4b6,a8a7,b6c8,d8c8,f2f4,a5a4,c2f2';
        this.addSequence(name, fen, moves);
        name = 'Semi-Slav Cambridge Springs';
        fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
        moves = 'd2d4,d7d5,g1f3,c7c6,c2c4,g8f6,b1c3,e7e6,c1g5,b8d7,d1c2,d8a5,g5d2,a5d8,e2e4';
        this.addSequence(name, fen, moves);
        name = 'Sicilian Bowdler Attack';
        fen = 'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1';
        moves = 'c7c5,f1c4,e7e6,g1f3,g8f6,e4e5,d7d5,c4b5,f6d7,b5d7,d8d7,e1g1,b8c6,b1c3,b7b6,d2d3,f8e7';
        this.addSequence(name, fen, moves);
    }

    public findSequence(name: string): Sequence {
        for (const seq of this.sequencies) {
            if (seq.name === name) {
                return seq;
            }
        }
        return undefined;
    }

    // private addSequence(info: string) {
    //     const parts = info.split(',');
    //     if (parts.length > 3) {
    //         const seq = new Sequence();
    //         seq.name = parts[0];
    //         seq.fen = parts[1];
    //         for (let i = 2; i < parts.length; i++) {
    //             seq.addStep(parts[i], '');
    //         }
    //         this.sequencies.push(seq);
    //         // console.log("Sequence added: " + seq.name);
    //     }
    // }

    private addSequence(name: string, fen: string, moves: string) {
        const seq = new Sequence();
        seq.name = name;
        seq.fen = fen;
        const parts = moves.split(',');
        for (let i = 0; i < parts.length; i++) {
            seq.addStep(parts[i], '');
        }
        this.sequencies.push(seq);
    }
}
