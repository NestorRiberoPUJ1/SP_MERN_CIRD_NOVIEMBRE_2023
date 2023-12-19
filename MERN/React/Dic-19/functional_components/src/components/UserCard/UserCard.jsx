import { useState } from "react";

import star from "./assets/star.webp";


const cardStyle = {
    border: "4px solid gray",
    width: 240,
    backgroundColor: "white",
    padding: 16,
    position: "relative"
};
const cardH1 = {
    color: "blue",
}

const darkCard = {
    border: "4px solid white",
    width: 240,
    backgroundColor: "black",
    padding: 16,
    color: "white"
}


const lamp = (x, y) => ({
    height: 40,
    width: 40,
    boxShadow: "10px 10px 5px 37px rgba(255,255,255,0.75)",
    borderRadius: "50%",
    backgroundColor: "none",
    position: "absolute",
    top: y,
    left: x,
})

const starLogo = {
    height: 40,
    position: "absolute",
    right: -20,
    top: -20
}


const UserCard = ({ nombre, img, descripcion, preferido, setPreferido }) => {

    const [dark, setDark] = useState("OFF");
    const [position, setPosition] = useState({ x: 0, y: 0 });


    const [counter, setCounter] = useState(0);

    const enviar = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        console.log(data);

    }

    const handleTheme = (e) => {
        console.log(e.target.checked);
        if (e.target.checked) {
            setDark("ON");
        }
        else {
            setDark("OFF");
        }
    }

    const handleMouseOver = (e) => {
        console.log(e);
        setPosition({ x: e.pageX, y: e.pageY })

    }

    const handleContador = () => {

        setCounter((prevVal) => {
            console.log(prevVal);

            return (prevVal + 1);
        })
        setPreferido(nombre);
    }

    return (
        <div
            style={dark === "ON" ? darkCard : cardStyle}
            onMouseMove={handleMouseOver}
        >
            <div>
                <input type="checkbox" name="" id="" onChange={handleTheme} />
                <p>{dark}</p>
                <p>X:{position.x}</p>
                <p>Y:{position.y}</p>
            </div>
            <h1 style={cardH1}>{nombre}</h1>
            <h1 style={cardH1}>{counter}</h1>
            <div style={{ display: "flex" }}>
                <img src={img} alt="img" width={120} />
                <p>{descripcion}</p>
            </div>
            <button
                type="button"
                onClick={() => alert(`Saludos ${nombre}`)}
            >
                Saludar
            </button>
            <form action="" onSubmit={enviar}>
                <div>
                    <label htmlFor="msg">Mensaje:</label>
                    <input type="text" name="textMsg" id="msg"
                        onChange={(e) => console.log(e.target.value)}
                        onFocus={() => console.log("FOCUSED INPUT")}
                        onBlur={() => console.log("NOT FOCUSED ANYMORE")}
                    />
                    <button type="submit" onClick={handleContador} onFocus={() => console.log("FOCUSED BUTTON")}>Enviar</button>
                </div>
            </form>

            {/* <div style={lamp(position.x, position.y)}/> */}
            
            {
                preferido === nombre &&
                <img style={starLogo} src={star} alt="star" />
            }


        </div>
    )

}

export default UserCard;