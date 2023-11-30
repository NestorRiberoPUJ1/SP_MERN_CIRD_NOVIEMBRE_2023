
console.log("hola a todos");

var titulo = "Ingeniero";
var especialidad = "Electrónico";
var nombre = "Nestor";
var apellido = "Ribero";
var edad = 31;
console.log(nombre);
var nombreCompleto = "";

if (edad > 30) {
    nombreCompleto = "Sr "
}

/* if (titulo == "Ingeniero") {
    if (especialidad == "Electrónico") {
        nombreCompleto += "Super Ing.";
    }
    else {
        nombreCompleto += "Ing.";
    }
} */

if (titulo == "Ingeniero" && especialidad == "Electrónico") {
    nombreCompleto += "Super Ing.";
}
else if (titulo == "Ingeniero") {
    nombreCompleto += "Ing.";
}

else if (titulo == "Doctor") {
    nombreCompleto += "Dr."
}
else {
    nombreCompleto += titulo + " "
}
nombreCompleto += nombre + " " + apellido;
console.log(nombreCompleto);


/* Bucles / Loops */


for (let index = 0; index < 20; index++) {
    console.log(index);

}

console.log("------------------");
var veces = 0;
var numero = 0;

while (numero < 2) {
    numero = Math.random() * 100;
    console.log(numero);
    veces++;
}

console.log("VECES:", veces);

buscarPerro();


async function buscarPerro() {
    const init = performance.now();
    //Hacemos la peticion a la ruta con fetch 
    const respuesta = await fetch("https://dog.ceo/api/breeds/image/random");
    //Hacemos la conversion de la respuesta a formato json
    const resultado = await respuesta.json();
    //Calcular el intervalo de tiempo
    console.log(performance.now() - init, resultado.message);
}