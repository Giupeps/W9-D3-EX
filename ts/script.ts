abstract class Lavoratore {
  redditoAnnuoLordo: number;
  tasseInps?: number;
  tasseIrpef?: number;
  constructor(redditoAnnuoLordo: number) {
    this.redditoAnnuoLordo = redditoAnnuoLordo;
  }

  getTasseInps(): number {
    let impostaInps: number = this.redditoAnnuoLordo * 0.33;
    return impostaInps;
  }

  getTasseIrpef(): number | undefined {
    let IrpefPagata1 = this.redditoAnnuoLordo * 0.23;
    let IrpefPagata2 = this.redditoAnnuoLordo * 0.25;
    let IrpefPagata3 = this.redditoAnnuoLordo * 0.35;
    let IrpefPagata4 = this.redditoAnnuoLordo * 0.43;

    if (this.redditoAnnuoLordo <= 15000) {
      return IrpefPagata1;
    } else if (
      this.redditoAnnuoLordo > 15000 &&
      this.redditoAnnuoLordo <= 28000
    ) {
      return IrpefPagata2;
    } else if (
      this.redditoAnnuoLordo > 28000 &&
      this.redditoAnnuoLordo <= 50000
    ) {
      return IrpefPagata3;
    } else if (this.redditoAnnuoLordo > 50000) {
      return IrpefPagata4;
    }
  }
}

class Musicista extends Lavoratore {
  constructor(redditoAnnuoLordo: number) {
    super(redditoAnnuoLordo);
  }

  getUtileTasse(): number {
    let tasseInps: number = this.getTasseInps();
    let tasseIrpef: number | undefined = this.getTasseIrpef();
    return tasseInps + tasseIrpef!;
  }

  getRedditoAnnuoNetto(): number {
    return this.redditoAnnuoLordo - this.getUtileTasse();
  }
}

let musc = new Musicista(15000);

console.log(`
Irpef pagata: ${musc.getTasseIrpef()}$
Inps da pagare: ${musc.getTasseInps()}
Utile Tasse: ${musc.getUtileTasse()}
Reddito annuo Netto: ${musc.getRedditoAnnuoNetto()}
`);
