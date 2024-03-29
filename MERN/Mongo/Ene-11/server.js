const express = require('express');
const app = express();
const port = 8000;

require('./config/mongoose.config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const usuarioRoutes = require('./routes/usuario.routes');
app.use("/api/usuarios", usuarioRoutes);

const carroRoutes = require('./routes/carro.routes');
app.use("/api/carros", carroRoutes);


app.listen(port, () => console.log(`Listening on port: ${port}`));