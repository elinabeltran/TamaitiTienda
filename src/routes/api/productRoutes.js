const express = require('express');
const router = express.Router();
const apiProductController = require ("../../controllers/api/productController")

router.get('/', apiProductController.list);
router.get('/categories', apiProductController.listCategories);
router.get('/categories/:id', apiProductController.listFilter);

router.get('/:id', apiProductController.detail);

// router.post('/create', apiProductController.create);
// router.put('/update/:id', apiProductController.update);
// router.delete('/delete/:id', apiProductController.delete);


module.exports = router;