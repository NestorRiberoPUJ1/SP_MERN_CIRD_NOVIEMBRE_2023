
const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const rootRoutes = require('./routes/root.routes');
app.use('/api', rootRoutes);

const equipoRoutes = require('./routes/equipos.routes');
app.use('/api/teams', equipoRoutes);

app.listen(port, () => console.log(`Listening on port: ${port}`));