import './App.css';
import generateKey from './utils/generateKey';


const contactos = [
  "Nestor",
  "Max",
  "Checo",
  "Seb",
  "Michael",
  "Carlos",
  "Fernando",
  "Kimi",
];
const titulo = "HOLA A TODOS";
function App() {


  return (
    <div className="App">
      <h1>{titulo}</h1>
      {
        contactos.map((value, index, array) => {
          return (
            <h3 key={generateKey(`${value}_${index}`)}>{value}</h3>
          )
        })
      }
    </div>
  );
}

export default App;
