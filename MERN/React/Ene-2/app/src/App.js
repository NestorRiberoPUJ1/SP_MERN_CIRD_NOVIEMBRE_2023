
import { useState } from 'react';
import './App.css';
import Cronometro from './components/Cronometro/Cronometro';
import Perrito from './components/Perrito/Perrito';
import Pokemon from './components/Pokemon/Pokemon';

function App() {

  const [cronometrar, setCronometrar] = useState(false);

  return (
    <div className="App">

      <div>
        <Perrito />
        <Pokemon />
        {
          !cronometrar ?
            <button onClick={() => setCronometrar(true)}>Iniciar</button>
            :
            <button onClick={() => setCronometrar(false)}>Reset</button>
        }

      </div>
      {
        cronometrar &&
        <Cronometro />
      }

    </div>
  );
}

export default App;
