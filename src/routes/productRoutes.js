const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productController = require('../controllers/productController');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/uploads/img_products'))
    },
    filename: function (req, file, cb) {
      cb(null, req.body.name + Date.now() + path.extname(file.originalname))
    }
  })
   
var upload = multer({ storage: storage })


router.get('/', productController.index);
router.get('/create', productController.boardCreate);
router.post('/create',upload.any(), productController.create);
router.get('/edit/:id', productController.edit);
router.put('/edit/:id', productController.update);
router.delete('/delete/:id', productController.delete);
router.get('/search', productController.searchView);
router.get('/searchResults', productController.search);
router.get('/cart', productController.cart);
router.get('/:id', productController.detail);


module.exports = router;