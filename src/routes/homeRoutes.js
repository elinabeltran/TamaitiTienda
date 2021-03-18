const express = require('express');
const homeController = require('../controllers/homeController');
const router = express.Router();

 const gifResource = require('../requests/gifResource');


router.get('/', homeController.index);



module.exports = router;