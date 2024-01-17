const express = require('express');
const router = express.Router();

const carroController = require('../controllers/carro.controller')

//Create
router.post("", carroController.createCarro);
//Find All
router.get("", carroController.findAllCarros);
//Find One
router.get("/:id", carroController.findCarro);
//Update One
router.put("/:id", carroController.updateCarro);
//Delete One
router.delete("/:id", carroController.deleteCarro);


module.exports = router;