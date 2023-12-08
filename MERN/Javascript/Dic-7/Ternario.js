


/* 
    Crear la variable a con un valor
    Crear la varibale b, si a es mayor a 5 b =10 sino b=2
*/
/* Sintaxis antigua */
var a = -4;

var b;

console.time("antigua");
if (a > 5) {
    b = 10;
}
else if (a > 3) {
    b = 4;
}
else if (a > 0) {
    b = 1
}
else {
    b = 2;
}

console.timeEnd("antigua");

/* Operador ternario */

console.time("ES6");
var d = a > 5 ? 10 : a > 3 ? 4 : a > 0 ? 1 : 2;

console.log(b, d);
console.timeEnd("ES6");



const obj = {
    nombre: "object",
    valores: [1, 2, 3, 4]
}
const obj2 = {
    nombre: "object",
}


console.log(obj.valores.map((e) => e));
console.log(obj2.valores?.map((e) => e));