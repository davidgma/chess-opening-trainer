// A record taken from the Google Docs spreadsheet
// that records previous successful attempts and 
// when the next attempt is due.
// It is used by the record service and by the trainer.

export enum OutputColour {
	red = "#e20f0f",
	green = "#1daf07",
	blue = "#b7d7d9"
}

export class Record {
	// name: string; // name of the sequence
	// last: Date; // date and time last practiced
	// next: Date; // due date for next practise

	public incrementFactor = 1.5;
	private _last: Date = new Date();
	private _next: Date = new Date();
	public lastS: string;
	public nextS: string;
	public colour: OutputColour;

	constructor(public name: string,
		last: Date,
		next: Date) {
		this.init(last, next).then(() => {
			// Initialised
		});
	}

	private async init(last: Date, next: Date) {
		let p = new Promise(async (resolve) => {
			await this.setLast(last);
			await this.setNext(next);
			await this.setColour();
			resolve();
		});
		return p;
	}

	public async setLast(value: Date) {
		let p = new Promise<void>(async (resolve) => {
			this._last = value;
			this.lastS = await this.dateToString(value);
			resolve();
		});
		return p;
	}

	public get last(): Date {
		return this._last;
	}

	public async setNext(value: Date) {
		let p = new Promise<void>(async (resolve) => {
			this._next = value;
			this.nextS = await this.dateToString(value);
			resolve();
		});
		return p;
	}

	public get next(): Date {
		return this._next;
	}

	private async setColour(): Promise<void> {
		let p = new Promise<void>(async (resolve) => {
			let now = new Date();
			if (this.next < now) {
				this.colour = OutputColour.red;
			}
			else {
				this.colour = OutputColour.green;
			}
			resolve();
		});
		return p;
	}

	// Called when a mistake is made doing a sequence
	public async mistake() {
		this.colour = OutputColour.red;
		this.setNext(new Date());
	}

	public success() {
		this.colour = OutputColour.green;
		let gap =
			(this.next.getTime() - this.last.getTime()) * this.incrementFactor;
		let oneDay = 1000 * 60 * 60 * 24;
		let now = new Date();
		if (gap < oneDay)
			gap = oneDay;
		this.setLast(new Date());
		this.setNext(new Date(now.getTime() + gap));
	}


	private async dateToString(date: Date): Promise<string> {
		let p = new Promise<string>(async (resolve) => {
			let year = date.getFullYear().toString();
			let month = (date.getMonth() + 1).toString();
			if (month.length === 1)
				month = "0" + month;
			let day = date.getDate().toString();
			if (day.length === 1)
				day = "0" + day;
			let hour = date.getHours().toString();
			if (hour.length === 1)
				hour = "0" + hour;
			let minute = date.getMinutes().toString();
			if (minute.length === 1)
				minute = "0" + minute;
			resolve(year + "-" + month + "-" + day + " " + hour
				+ ":" + minute);
		});
		return p;
	}


}