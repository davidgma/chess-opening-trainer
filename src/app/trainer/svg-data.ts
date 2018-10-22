export class SvgPath {
    constructor(public d: string, public className: string) {

    }
}

export class SvgCircle {
    constructor(public cx: number, 
        public cy: number,
        public r: number,
        public className: string) {

    }
}

// This class holds svg data in a form that can be accessed
// from an Angular template
export class SvgData {
    public paths: Array<SvgPath> = new Array<SvgPath>(); 
    public circles: Array<SvgCircle> = new Array<SvgCircle>(); 
}