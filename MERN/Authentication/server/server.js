require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

require('./config/mongoose.config');


app.use(cookieParser());

app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:3000"]
    })
)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const userRoutes = require('./routes/user.routes');
app.use("/api/user", userRoutes);



app.listen(port, () => console.log(`Listening on port: ${port}`));