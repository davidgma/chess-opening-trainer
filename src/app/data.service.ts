import { Injectable } from '@angular/core';
import { Move } from '../app/chessboard/chess-enums';

export class Sequence {
    name: string; // name of the sequence
    fen: string; // initial fen position
    steps: Array<Step> = new Array<Step>(); // array of steps in the sequence

    public addStep(move: string, comment: string) {
        let m = new Move(move.substr(0,2), move.substr(2,2));
        this.steps.push(new Step(m, comment));
        
    }
}

export class Step {
    // move e.g. d2d4
    // comment on the move
    constructor(public move: Move, public comment: string) {}
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
        let seq = new Sequence();
        seq.name = "Sicilian Mainline";
        seq.fen = "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1";
        seq.addStep("c7c5", "Mainline Sicilian");
        seq.addStep("g1f3", "Mainline Sicilian");
        seq.addStep("d7d6", "Mainline Sicilian");
        this.sequencies.push(seq);
        console.log("sequence added");
    } 

    public findSequence(name: string): Sequence {
        for (let seq of this.sequencies) {
            if (seq.name == name) 
                return seq;
        }
        return null;
    }
}
