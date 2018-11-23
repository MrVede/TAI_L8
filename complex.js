"use strict";
class Complex {
    constructor(imagined, real) {
        this._imagined = imagined;
        this._real = real;
    }
    get imagined() {
        return this._imagined;
    }
    set imagined(value) {
        this._imagined = value;
    }
    get real() {
        return this._real;
    }
    set real(value) {
        this._real = value;
    }
    add(toAdd) {
        this._real += toAdd._real;
        let tab = this._imagined.split("");
        let tabToAdd = toAdd._imagined.split("");
        let imaginedNumber = Number(tab[0]) + Number(tabToAdd[0]);
        this._imagined = imaginedNumber + tab[1];
        return this;
    }
    subtract(toAdd) {
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
