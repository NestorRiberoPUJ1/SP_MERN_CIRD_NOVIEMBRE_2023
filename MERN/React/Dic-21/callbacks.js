
const noArgs = () => {
    console.log("SIN ARGUMENTOS");
}

const funcion = (param) => {
    console.log(param);
}

const funcion2 = (param1) => (param2) => {
    console.log(param1, param2);
}

const callbackConParametros = (params) => () => {
    console.log(params);
}


funcion("HOLA");

funcion2("HOLA")("TODOS");


setTimeout(callbackConParametros("NESTOR"), 2000);