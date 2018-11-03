

  private resizePiece(ratio: number) {

        for (let sp of this.svgData.paths) {
            sp.d = this.resizeDXY(sp.d, ratio);
            sp.transform = this.resizeTXY(sp.transform, ratio);
        }
        for (let c of this.svgData.circles) {
            c.cx *= ratio;
            c.cy *= ratio;
        }
        // this.tempTransform("translate(7,-4.5)");
    } 

 private resizeTXY(transform: string, ratio: number) {
        let re = /^(translate\()([-0-9\.]+)(\,)([-0-9\.]+)(\))$/;
        let ret = "";
        if (re.test(transform)) {
            console.log(transform + "contains a transform");
            ret = transform.replace(re,
                (match: string,
                    p1: string, p2: string, p3: string,
                    p4: string, p5: string) => {
                    let p2B =
                        (Number.parseFloat(p2) * ratio).toString();
                    let p4B =
                        (Number.parseFloat(p4) * ratio).toString();
                    return [p1, p2B, p3, p4B, p5].join('');
                });
            console.log(ret);
        }
        return ret;
    }

    private resizeDXY(d: string, ratio: number) {
        let ret: string = "";
        let inXNumber = false;
        let inYNumber = false;
        let coord = "";
        for (let i = 0; i < d.length; i++) {
            let char = d[i];
            if (char == "A") {
                // Elliptical arc, only adjust the last set of coords
                // Move forward to the 5th space
                ret += char;
                let spaceCount = 0;
                while (spaceCount < 5) {
                    i++;
                    char = d[i];
                    ret += char;
                    if (char == " ") {
                        spaceCount++;
                    }
                }
            }
            if (inXNumber) {
                if (char == ",") {
                    ret += (Number.parseFloat(coord)
                        * ratio).toString() + ",";
                    inXNumber = false;
                    inYNumber = true;
                    coord = "";
                }
                else {
                    coord += char;
                }
            }
            else if (inYNumber) {
                if (char == " ") {
                    ret += (Number.parseFloat(coord)
                        * ratio).toString() + " ";
                    inYNumber = false;
                    coord = "";
                }
                else {
                    coord += char;
                }
            }
            else if (isNaN(Number.parseInt(char))) {
                ret += char;
            }
            else {
                inXNumber = true;
                coord = char;
            }
        }
        return ret;
    }
