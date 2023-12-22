import { useState } from "react";




const MessageForm = ({ onMensajeNuevo }) => {

    const [mensaje, setMensaje] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        onMensajeNuevo(mensaje);
    }

    return (
        <form action="#" onSubmit={handleSubmit}>
            <h1>Envia tu mensaje</h1>
            <textarea name="mensajeInput" id="msgIpt" cols="30" rows="10" onChange={(e) => setMensaje(e.target.value)}>
                {mensaje}
            </textarea>
            <br />
            <button type="submit">Enviar</button>
        </form>
    )
}


export default MessageForm;