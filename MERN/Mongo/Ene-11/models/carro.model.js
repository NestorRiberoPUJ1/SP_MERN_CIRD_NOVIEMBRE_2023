const mongoose = require('mongoose');


const CarroSchema = new mongoose.Schema({

    brand: {
        type: String,
        required: [true, "La marca es obligatoria"],
        minLength: [2, "La marca tiene que ser mayor a dos"]
    },
    model: {
        type: String,
        required: [true, "El modelo es obligatorio"],
        minLength: [2, "El modelo tiene que ser mayor a dos"]
    },
    owner: { type: mongoose.Types.ObjectId, ref: "Usuario" }

}, { timestamps: true })

const Carro = mongoose.model("Carro", CarroSchema);

module.exports = Carro;
