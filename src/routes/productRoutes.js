const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multerMiddlewareImgProduct');
const path = require('path');
const productController = require('../controllers/productController');


const onlyAdmin = require('../middlewares/adminMiddleware');
const onlyUsers = require('../middlewares/autoriceMiddleware');
const imgValidator = require('../middlewares/validations/validatorImgMiddleware');
const productValidator = require('../middlewares/validations/validatorProductMiddleware');


router.get('/', productController.index);
router.get('/search', productController.searchView);
router.get('/searchResults', productController.search);

router.get('/category/:id', productController.category);
router.get('/age/:id', productController.age);


router.get('/create', onlyAdmin, productController.boardCreate);
router.post('/create', onlyAdmin, upload.any(), imgValidator, productValidator, productController.create);


router.get('/edit/:id',onlyAdmin, productController.edit);

router.put('/edit/:id',onlyAdmin, upload.any(), productValidator, productController.update);

router.delete('/delete/:id', onlyAdmin, productController.delete);

router.get('/cart', productController.cart);

router.get('/:id',productController.detail);




module.exports = router;