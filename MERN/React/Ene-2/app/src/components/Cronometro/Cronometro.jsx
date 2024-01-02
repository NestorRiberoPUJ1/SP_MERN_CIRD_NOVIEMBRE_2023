import { useEffect, useState } from "react";




const Cronometro = () => {

    const [milisegundos, setMilisegundos] = useState(0);
    const [segundos, setSegundos] = useState(0);
    const [minutos, setMinutos] = useState(0);

    /* Montaje del componente */
    useEffect(() => {
        console.log("MONTAJE");

        const itv = setInterval(() => {
            setMilisegundos((val) => {
                return (val + 10);
            })
        }, 10)

        return () => {
            console.log("FINALIZANDO");
            clearInterval(itv);
            alert("VA A REINICIAR EL COMPONENTE");
        }

    }, [])

    useEffect(() => {

        if (milisegundos > 999) {
            setMilisegundos(0);
            setSegundos((val) => {
                return (val + 1);
            })
        }
    }, [milisegundos])

    useEffect(() => {
        console.log("SEGUNDO");
        if (segundos > 59) {
            setSegundos(0);
            setMinutos((val) => {
                return (val + 1);
            })
        }
    }, [segundos])

    return (
        <div>
            <h1>Cronometrando:</h1>
            <h2>{minutos}:{segundos}:{milisegundos}</h2>
        </div>
    )
}


export default Cronometro;