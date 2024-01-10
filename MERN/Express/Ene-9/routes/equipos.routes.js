
const express = require('express');
const router = express.Router();

const equiposControllers = require('../controllers/equipos.controllers')


router.get("/", equiposControllers.getEquipos);
router.post("/", equiposControllers.createEquipo);
router.get("/:id", equiposControllers.getEquipoById);
router.put("/:id", equiposControllers.updateEquipoById);
router.delete("/:id", equiposControllers.deleteEquipoById);

module.exports = router;
