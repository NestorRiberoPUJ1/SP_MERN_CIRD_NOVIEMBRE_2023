

console.log("Información neutra");
console.error("Error en algo");
console.warn("Algo no cuadra");
console.info("Informacion");

/* Primitivos */
var count = 5;  //numericas
var message = "Hola, mundo"; //texto
var likesJS = true; //logicas


count = 42;// asignar un valor
count = 22 - 8; //matematicos

var message2 = message + " programando " + (count + 8);
console.log(message2);

count = count + 14;
count += 14;
count -= 14;
count *= 12;
count /= 12;

message += " tecnologico";
console.log(message);



/* Estructuras de datos */


var contactos = ["Nestor", "Max", "Sergio", "Pierre", "Carlos"];
console.log(contactos[3]);

var definiciones = {
    suv: "Camionetas familiares de max 1.5 TON",
    sedan: "Automoviles familiares de tamaño regular",
    pickup: "Camionetas utilitarias con espacio para carga"
}

console.log(definiciones.sedan);
console.log(definiciones["pickup"]);


const pi = 3.141592;
let locales = "pasaporte";
var globales = "123";




/* Funciones */


function elevarAlCuadrado(numero) {
    return numero * numero;
}


console.log(elevarAlCuadrado(4));


var productos = {
    vino: 14,
    pan: 22,
    leche: 40,
    agua: 10,
    verduras: 12,
}


function venta(producto, cantidad) {
    productos[producto] -= cantidad;
}

const compra = (producto, cantidad) => {
    productos[producto] += cantidad;
}


venta("leche", 12);

venta("verduras", 4);

compra("vino", 6);

console.log(productos);


function avoidClick() {
    console.log("You clicked the wrong button");
    titulo1.style.backgroundColor = "red";
    titulo1.innerText = "HOLA"
}

const saludar = (elemento) => {
    console.log(elemento.innerText);
}

const over = (element) => {
    console.log("over");
    element.style.backgroundColor = "red";
}


const out = (element) => {
    console.log("out")
    element.style.backgroundColor = "dodgerblue";
}

var titulo1 = document.querySelector("h1");
console.log(titulo1);
var titulo2 = document.querySelector(".t2");
console.log(titulo2);
var titulo3 = document.querySelector("#t3");
console.log(titulo3);


var contenedorBotones = document.querySelector("#contenedorBotones");

contenedorBotones.addEventListener("click", () => {
    contenedorBotones.innerHTML += `<button onclick="darkMode(this)">HOLA</button>`;
})

function darkMode(element) {
    element.classList.add("darkMode");
}