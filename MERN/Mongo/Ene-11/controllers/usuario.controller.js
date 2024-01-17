const Usuario = require("../models/usuario.model");



module.exports.findAllUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200);
        res.json(usuarios);
    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};
module.exports.findUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findOne({ _id: req.params.id }).populate("cars");
        if (usuario) {
            res.status(200);
            res.json(usuario);
            return;
        }
        res.status(404);
        res.json({ error: "user not found" });
    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};
module.exports.createUsuario = async (req, res) => {
    try {
        const newUser = await Usuario.create(req.body);
        res.status(201);
        res.json(newUser);

    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};
module.exports.updateUsuario = async (req, res) => {
    try {
        const updatedUser = await Usuario.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.status(200);
        res.json(updatedUser);

    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};
module.exports.deleteUsuario = async (req, res) => {
    try {
        const deletedUser = await Usuario.deleteOne({ _id: req.params.id });
        res.status(200);
        res.json(deletedUser);

    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};