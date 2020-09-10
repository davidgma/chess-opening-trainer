import { Move } from '../chessboard/chess-enums';

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