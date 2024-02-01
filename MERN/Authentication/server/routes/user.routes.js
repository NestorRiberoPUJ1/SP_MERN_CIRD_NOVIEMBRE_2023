const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const { authenticate } = require('../config/jwt.config');


/* Rutas de session */
router.post("/session", userController.login);
router.delete("/session", userController.logout);

/* Ruta cookie de prueba */
router.get("/cookie", authenticate, userController.cookie);

/* Rutas Basicas del CRUD */
router.post("",  userController.createUser);
router.get("", authenticate, userController.findAllUsers);
router.get("/:id", authenticate, userController.findUser);
router.put("/:id", authenticate, userController.updateUser);
router.delete("/:id", authenticate, userController.deleteUser);




module.exports = router;