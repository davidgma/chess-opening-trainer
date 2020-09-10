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
	// lastSuccess: Date; // date and time last completed successfully
	// next: Date; // due date for next practise
	// lastFail: Date; // date and time last completed with errors

	public incrementFactor = 1.5;
	private _lastSuccess: Date = new Date();
	private _next: Date = new Date();
	private _lastFail: Date = new Date();
	
	public lastSS: string;
	public nextS: string;
	public lastFS: string;
	public colour: OutputColour;

	constructor(public name: string,
		lastSuccess: Date,
		next: Date,
		lastFail) {
		this.init(lastSuccess, next, lastFail).then(() => {
			// Initialised
		});
	}

	private async init(lastSuccess: Date, next: Date, lastFail: Date) {
		let p = new Promise(async (resolve) => {
			await this.setLastSuccess(lastSuccess);
			await this.setNext(next);
			await this.setLastFail(lastFail);
			await this.setColour();
			resolve();
		});
		return p;
	}

	public async setLastSuccess(value: Date) {
		let p = new Promise<void>(async (resolve) => {
			this._lastSuccess = value;
			this.lastSS = await this.dateToString(value);
			resolve();
		});
		return p;
	}

	public get lastSuccess(): Date {
		return this._lastSuccess;
	}

	public async setLastFail(value: Date) {
		let p = new Promise<void>(async (resolve) => {
			this._lastFail = value;
			this.lastFS = await this.dateToString(value);
			resolve();
		});
		return p;
	}

	public get lastFail(): Date {
		return this._lastFail;
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
		this.setLastFail(new Date());
	}

	public success() {
		this.colour = OutputColour.green;
		let gap =
			(this.next.getTime() - this.lastSuccess.getTime()) * this.incrementFactor;
		let oneDay = 1000 * 60 * 60 * 24;
		let now = new Date();
		if (gap < oneDay 
			|| (this.lastFail.getTime() > this.lastSuccess.getTime() ) )
			gap = oneDay;
		this.setLastSuccess(new Date());
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