
import { useState } from 'react';
import './App.css';
import CardContainer from './components/CardContainer/CardContainer';
import NavBar from './components/NavBar/NavBar';
import UserCard from './components/UserCard/UserCard';

const App = () => {

  const [preferido, setPreferido] = useState("");

  return (
    <div className="App">
      <NavBar />

      <h1>
        REACT
      </h1>
      <h2>Preferido: {preferido}</h2>
      <CardContainer setPreferido={setPreferido}>
        <UserCard preferido={preferido} setPreferido={setPreferido} nombre="Nestor" descripcion="Ing. Electrónico" img="https://media.licdn.com/dms/image/C4D03AQGrcxUWrL6A7Q/profile-displayphoto-shrink_200_200/0/1649250088714?e=1703721600&v=beta&t=kdGJprfIAEBDC6TOqKVEhepNzhZVeLLFl_XNcrtyihI" />
        <UserCard preferido={preferido} setPreferido={setPreferido} nombre="Max" descripcion="Piloto F1" img="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Max_Verstappen_2017_Malaysia_3.jpg/320px-Max_Verstappen_2017_Malaysia_3.jpg" />
        <UserCard preferido={preferido} setPreferido={setPreferido} nombre="Checo" descripcion="Piloto F1" img="https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/perez.jpg.img.1536.high.jpg" />
        <UserCard preferido={preferido} setPreferido={setPreferido} nombre="Michael" descripcion="Legenda de la F1" img="https://www.si.com/.image/ar_8:10%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MjAxMDY5MzY0MjYxMTY4MjIx/usatsi_2132271_168396005_lowres.jpg" />
      </CardContainer>
    </div>
  );
}

export default App;
