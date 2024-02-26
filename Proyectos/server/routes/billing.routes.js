const express = require('express');
const router = express.Router();

const billingController = require('../controllers/billing.controller');



/* Rutas Basicas del CRUD */
router.get("", billingController.createBilling);



module.exports = router;