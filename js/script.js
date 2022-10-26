"use strict";
class Lavoratore {
    constructor(redditoAnnuoLordo) {
        this.redditoAnnuoLordo = redditoAnnuoLordo;
    }
    getTasseInps() {
        let impostaInps = this.redditoAnnuoLordo * 0.33;
        return impostaInps;
    }
    getTasseIrpef() {
        let IrpefPagata1 = this.redditoAnnuoLordo * 0.23;
        let IrpefPagata2 = this.redditoAnnuoLordo * 0.25;
        let IrpefPagata3 = this.redditoAnnuoLordo * 0.35;
        let IrpefPagata4 = this.redditoAnnuoLordo * 0.43;
        if (this.redditoAnnuoLordo <= 15000) {
            return IrpefPagata1;
        }
        else if (this.redditoAnnuoLordo > 15000 &&
            this.redditoAnnuoLordo <= 28000) {
            return IrpefPagata2;
        }
        else if (this.redditoAnnuoLordo > 28000 &&
            this.redditoAnnuoLordo <= 50000) {
            return IrpefPagata3;
        }
        else if (this.redditoAnnuoLordo > 50000) {
            return IrpefPagata4;
        }
    }
}
class Musicista extends Lavoratore {
    constructor(redditoAnnuoLordo) {
        super(redditoAnnuoLordo);
    }
    getUtileTasse() {
        let tasseInps = this.getTasseInps();
        let tasseIrpef = this.getTasseIrpef();
        return tasseInps + tasseIrpef;
    }
    getRedditoAnnuoNetto() {
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
