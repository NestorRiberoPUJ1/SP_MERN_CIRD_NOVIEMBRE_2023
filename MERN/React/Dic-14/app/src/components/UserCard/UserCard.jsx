import { Component } from "react";


const cardStyle = {
    border: "4px solid gray",
    width: 240,
    backgroundColor: "white",
    padding: 16,
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

class UserCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dark: "OFF",
            x: 0,
            y: 0
        };
    }


    render() {

        const { nombre, img, descripcion } = this.props;
        const enviar = (e) => {
            e.preventDefault();
            const data = new FormData(e.target);

            console.log(data);

        }

        const handleTheme = (e) => {
            console.log(e.target.checked);
            if (e.target.checked) {
                this.setState({ dark: "ON" });
            }
            else {
                this.setState({ dark: "OFF" });
            }
        }

        const handleMouseOver = (e) => {
            console.log(e);
            this.setState({ ...this.state, x: e.pageX, y: e.pageY });
        }

        return (
            <div
                style={this.state.dark === "ON" ? darkCard : cardStyle}
                onMouseOver={handleMouseOver}
            >
                <div>
                    <input type="checkbox" name="" id="" onChange={handleTheme} />
                    <p>{this.state.dark}</p>
                    <p>X:{this.state.x}</p>
                    <p>Y:{this.state.y}</p>
                </div>
                <h1 style={cardH1}>{nombre}</h1>
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
                        <button type="submit" onFocus={() => console.log("FOCUSED BUTTON")}>Enviar</button>
                    </div>
                </form>

                <div style={lamp(this.state.x, this.state.y)}>

                </div>

            </div>
        )
    }

}

export default UserCard;