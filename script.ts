interface Ismartphone {
  carica: number;
  numeroChiamate: number;
  costoMinuto: number;
  ricarica(euro: number): void;
  numero404(): string;
  getNumeroChiamate(): number;
  chiamata(min: number): void;
  azzeraChiamate(): void;
}

class Smartphone implements Ismartphone {
  carica: number;
  numeroChiamate: number;
  costoMinuto: number = 0.2;
  constructor(euro: number, numero: number = 0) {
    this.carica = euro;
    this.numeroChiamate = numero;
  }
  ricarica(euro: number): void {
    this.carica += euro;
  }
  numero404(): string {
    return this.carica + "€";
  }
  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }
  chiamata(min: number): void {
    if (this.carica > 0) {
      this.carica -= min * this.costoMinuto;
      this.numeroChiamate += 1;
    } else {
      console.log("Sei povero come la M...");
    }
  }
  azzeraChiamate(): void {
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
