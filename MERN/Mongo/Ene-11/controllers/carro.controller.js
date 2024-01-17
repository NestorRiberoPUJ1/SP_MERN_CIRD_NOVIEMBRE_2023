const Carro = require("../models/carro.model");



module.exports.findAllCarros = async (req, res) => {
    try {
        const carros = await Carro.find();
        res.status(200);
        res.json(carros);
    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};
module.exports.findCarro = async (req, res) => {
    try {
        const carro = await Carro.findOne({ _id: req.params.id }).populate("owner");
        if (carro) {
            res.status(200);
            res.json(carro);
            return;
        }
        res.status(404);
        res.json({ error: "Carro not found" });
    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};
module.exports.createCarro = async (req, res) => {
    try {
        const newCarro = await Carro.create(req.body);
        res.status(201);
        res.json(newCarro);

    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};
module.exports.updateCarro = async (req, res) => {
    try {
        const updatedCarro = await Carro.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.status(200);
        res.json(updatedCarro);

    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};
module.exports.deleteCarro = async (req, res) => {
    try {
        const deletedCarro = await Carro.deleteOne({ _id: req.params.id });
        res.status(200);
        res.json(deletedCarro);

    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};