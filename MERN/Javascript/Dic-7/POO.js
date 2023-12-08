

const arr = [1, 2, 3, 4, 5];
const obj = {
    name: "objecto",
    category: "js"
}


class Avion {

    constructor(fabricante, modelo, aerolinea, pasajeros) {
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.aerolinea = aerolinea;
        this.pasajeros = pasajeros;
        this.millas = 0;
    }

    volar(km) {
        console.log(`Volando ${km} kms`);
        this.millas += km;
    }

}

const a320 = new Avion("Airbus", "A320", "United", "380");

console.log(a320);
a320.volar(250);
console.log(a320.millas);



class AvionCombate extends Avion {
    constructor(fabricante, modelo, aerolinea, pasajeros, armamento) {
        super(fabricante, modelo, aerolinea, pasajeros)
        this.armamento = armamento
    }

    atacar() {
        this.armamento -= 20;
    }

    volar(kms){
        super.volar(kms);
        console.log("Gastando combustible especial");
    }
}


const mig22 = new AvionCombate("Mig", "22", "USSR", "2", 1000);

console.log(mig22);
mig22.volar(300);