class Complex {
    private _imagined: string;
    private _real: number;


    constructor(imagined: string, real: number) {
        this._imagined = imagined;
        this._real = real;
    }


    get imagined(): string {
        return this._imagined;
    }

    set imagined(value: string) {
        this._imagined = value;
    }

    get real(): number {
        return this._real;
    }

    set real(value: number) {
        this._real = value;
    }

    add(toAdd: Complex) {
        this._real += toAdd._real;
        let tab = this._imagined.split("");
        let tabToAdd = toAdd._imagined.split("");

        let imaginedNumber = Number(tab[0]) + Number(tabToAdd[0]);

        this._imagined = imaginedNumber + tab[1];

        return this
    }

    subtract(toAdd: Complex) {
        this._real -= toAdd._real;
        let tab = this._imagined.split("");
        let tabToAdd = toAdd._imagined.split("");

        let imaginedNumber = Number(tab[0]) - Number(tabToAdd[0]);

        this._imagined = imaginedNumber + tab[1];

        return this;
    }

    module() {
        let toSqrt = Math.pow(this._real, 2) + Math.pow(Number(this._imagined.split("")[0]), 2);
        return Math.sqrt(toSqrt);
    }

}

let complex = new Complex("2i", 1);
let complexToAdd = new Complex("2i", 1);

console.log("Dodawanie", complex.add(complexToAdd));
console.log("Odejmowanie", complex.subtract(complexToAdd));
console.log("Module", complex.module());