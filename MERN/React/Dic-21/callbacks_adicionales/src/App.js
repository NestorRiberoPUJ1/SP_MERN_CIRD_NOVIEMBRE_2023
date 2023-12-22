import { useState } from 'react';
import './App.css';


const countries = [
  { name: "United States", code: "USA" },
  { name: "CANADA", code: "CAD" },
  { name: "RUSIA", code: "RSA" },
  { name: "COLOMBIA", code: "COL" },
]


const App = () => {

  const [formulario, setFormulario] = useState({ user: "", password: "", country: "", passport: false });

  const handleChange = (e, attr) => {
    setFormulario((prev) => {
      const aux = { ...prev };
      aux[attr] = e.target.value;
      return aux;
    })
  }

  const handleChangeCpx = (attr) => (e) => {
    setFormulario((prev) => {
      const aux = { ...prev };
      aux[attr] = e.target.value;
      return aux;
    })
  }

  const handleChangeObj = (e) => {
    setFormulario((prev) => {
      prev[e.target.name] = e.target.type === "checkbox" ? e.target.checked : e.target.value;
      return { ...prev };
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formulario);
  }

  return (
    <div className="App">

      <form onSubmit={handleSubmit} >

        <div>
          <label>
            Usuario
          </label>
          <input
            type="text"
            value={formulario.user}
            name="user"
            /* onChange={(e) => setFormulario((prev) => ({ ...prev, user: e.target.value }))} */
            /* onChange={(e) => handleChange(e, "user")} */
            onChange={handleChangeObj}
          />
        </div>
        <div>
          <label>
            Constraseña
          </label>
          <input
            type="text"
            value={formulario.password}
            name="password"
            /* onChange={(e) => setFormulario((prev) => ({ ...prev, password: e.target.value }))} */
            /* onChange={handleChangeCpx("password")} */
            onChange={handleChangeObj}
          />
        </div>

        <div>
          <select name="country" value={formulario.country} onChange={handleChangeObj}>
            <option value="" disabled>Country</option>
            {
              countries.map((item, index) => {
                return (
                  <option key={index} value={item.code}>{item.name}</option>
                )
              })
            }
          </select>
          <label>
            <input name="passport" value="ON" type="checkbox" checked={formulario.passport} onChange={handleChangeObj} /> Passport
          </label>
        </div>

            <button type="submit">Enviar</button>
      </form>
      <p>{formulario.user}</p>
      <p>{formulario.password}</p>
      <p>{formulario.country}</p>
      <p>{formulario.passport ? "true" : "false"}</p>

    </div>
  );
}

export default App;
