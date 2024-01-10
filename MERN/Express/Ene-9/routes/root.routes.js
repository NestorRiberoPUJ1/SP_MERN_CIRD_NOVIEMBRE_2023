const express = require('express');
const router = express.Router();

const rootControllers = require('../controllers/root.controllers');


router.get("/", rootControllers.getApi);
router.post("/", rootControllers.postApi);


module.exports = router;