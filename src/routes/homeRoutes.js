const express = require('express');
const homeController = require('../controllers/homeController');
const router = express.Router();

//  const gifResource = require('../requests/gifResource'); ---- PRACTICA API


router.get('/', homeController.index);



module.exports = router;