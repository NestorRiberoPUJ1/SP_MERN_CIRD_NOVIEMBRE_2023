

/* Funcion clásica */
function suma(s1, s2) {
    console.log("Sumando");
    return s1 + s2;
}


/* Flecha */

const add = (s1, s2) => {
    console.log("Sumando");
    return s1 + s2
};


const arreglos = (val) => [val, val];

const objs = (val) => ({ hola: val });

console.log(arreglos(2));

console.log(objs("hola"));
