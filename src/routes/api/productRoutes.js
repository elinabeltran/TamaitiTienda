const express = require('express');
const router = express.Router();
const apiProductController = require ("../../controllers/api/productController")

router.get('/', apiProductController.list);
router.get('/:id', apiProductController.detail);
router.post('/create', apiProductController.create);



module.exports = router;