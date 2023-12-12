
const noargs = () => {
    console.log("Sin argumentos");
}
const noargs2 = () => {
    console.log("Sin argumentos2");
}

setTimeout(noargs, 2000)


const saludar = (persona) => {
    console.log(`Hola ${persona}`);
}


saludar("Nestor");


const llamada = (callbckFn) => {
    console.log("voy a llamar a un callback");
    callbckFn();
}

llamada(noargs)



/* const btnC = document.getElementById("btnC");
btnC.addEventListener("click", noargs2)
 */


var nombre = "Nestor";
let apellido = "Ribero";
const nums = Object.freeze([1, 2, 3]);

nombre = "Nestor Eduardo";
apellido = "Ribero Vargas";



const groceryList = Object.freeze([
    { "item": "carrots", "haveIngredient": false },
    { "item": "onions", "haveIngredient": true },
    { "item": "celery", "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter", "haveIngredient": true }
]);

const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];

console.log(needThyme);

const needThyme2 = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] );

console.log(needThyme2);
needThyme[5].haveIngredient=true;

console.log(needThyme2);

const gotTheThyme = [ ...needThyme2.slice(0, 5), { ...needThyme2[5], "haveIngredient": true } ];

console.log(gotTheThyme);


console.log(Object.isFrozen(groceryList));