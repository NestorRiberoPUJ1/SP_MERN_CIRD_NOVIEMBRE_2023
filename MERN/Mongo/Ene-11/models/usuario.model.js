const mongoose = require('mongoose');

const MascotaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "La mascota necesita nombre"],
        minLength: [2, "Nombre muy corto"],
        maxLength: [8, "Nombre muy largo"]
    },
    type: {
        type: String,
        enum: ["GATO", "PERRO", "CHINCHILLA"],
        required: [true, "Tipo requerido"],
    }
}, { timestamps: true, versionKey: false })

const UsuarioSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "El nombre es obligatorio"],
        minLength: [2, "El nombre tiene que ser mayor a dos"]
    },
    age: {
        type: Number,
        min: [16, "La app es para mayores de 16"],
        max: [100, "La app no permite edades mayores a 100"],
        default: 20,
    },
    pet: MascotaSchema,
    cars: [{ type: mongoose.Types.ObjectId, ref: "Carro" }]

}, { timestamps: true })

const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;
