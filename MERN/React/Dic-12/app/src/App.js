import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <h1 className="titulo"> HOLA A REACT</h1>
      <h2> Vamos a trabajar en proyectos muy interesantes</h2>
      <p> Seguro les va a encantar</p>

      <div>
        <label htmlFor="userInput">usuario</label>
        <input id='userInput' name='usrIpt' type='text' />
      </div>

    </Fragment>
  );
}

export default App;
