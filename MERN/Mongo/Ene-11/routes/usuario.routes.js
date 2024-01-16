const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuario.controller')

//Create
router.post("", usuarioController.createUsuario);
//Find All
router.get("", usuarioController.findAllUsuarios);
//Find One
router.get("/:id", usuarioController.findUsuario);
//Update One
router.put("/:id", usuarioController.updateUsuario);
//Delete One
router.delete("/:id", usuarioController.deleteUsuario);


module.exports = router;