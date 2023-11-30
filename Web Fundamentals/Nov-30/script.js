



async function cambiar(elemento) {
    console.log("Cambiando Mascota");
    //Para obtener el tiempo de ejecución instantaneo del pprograma
    const init = performance.now();
    //Hacemos la peticion a la ruta con fetch 
    const respuesta = await fetch("https://dog.ceo/api/breeds/image/random");
    //Hacemos la conversion de la respuesta a formato json
    const resultado = await respuesta.json();
    //Calcular el intervalo de tiempo
    console.log(performance.now() - init, resultado.message);
    //Seleccionamos el componente padre del boton
    const padre = elemento.parentNode;
    console.log(padre);
    //Dentro del componente padre buscamos la etiqueta img
    const img = padre.querySelector("img");
    console.log(img);
    //Cambiamos el valor del atributo src de la imagen por el obtenido del fecth
    

    console.log(resultado.message);
    try {
        const checkImg = await fetch(resultado.message);
        console.log(checkImg);
        img.src = resultado.message;
    } catch (error) {
        console.log(error);
    }

    /* const rspCheck = await checkImg.json();
    console.log(checkImg, rspCheck); */



}