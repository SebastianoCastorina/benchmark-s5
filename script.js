"use strict";
class Smartphone {
    constructor(euro, numero = 0) {
        this.costoMinuto = 0.2;
        this.carica = euro;
        this.numeroChiamate = numero;
    }
    ricarica(euro) {
        this.carica += euro;
    }
    numero404() {
        return this.carica + "€";
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min) {
        if (this.carica > 0) {
            this.carica -= min * this.costoMinuto;
            this.numeroChiamate += 1;
        }
        else {
            console.log("Sei povero come la M...");
        }
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let GiorgioPoveracci = new Smartphone(0);
let MaccioCapatonda = new Smartphone(20);
let HerbertBallerina = new Smartphone(10);
console.log(GiorgioPoveracci);
console.log(MaccioCapatonda);
GiorgioPoveracci.chiamata(3);
console.log(GiorgioPoveracci);
MaccioCapatonda.chiamata(10);
console.log(MaccioCapatonda);
console.log(HerbertBallerina.numero404());
HerbertBallerina.azzeraChiamate;
console.log(HerbertBallerina);
