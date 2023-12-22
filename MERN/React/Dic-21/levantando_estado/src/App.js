
import { useState } from 'react';
import './App.css';
import CurrentMessage from './components/CurrentMessage/CurrentMessage';
import MessageForm from './components/MessageForm/MessageForm';

const App = () => {

  const [lastMessage, setLastMessage] = useState("No Message");

  const mensajeEntrante = (msg) => {
    const trimmed= msg.trim();
    const final= "Nuevo Mensaje: "+trimmed;
    setLastMessage(final);
  }

  return (
    <div className="App">

      <MessageForm onMensajeNuevo={mensajeEntrante} />
      <CurrentMessage message={lastMessage} />


    </div>
  );
}

export default App;
