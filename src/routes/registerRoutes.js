const express = require('express');
const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../public/uploads/avatar_user'))
    },
    filename: function (req, file, cb) {
      cb(null, req.body.name + Date.now() + path.extname(file.originalname))
    }
  })
   
var upload = multer({ storage: storage })


const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.registerBoard);
router.post('/',upload.any(), userController.register);
router.get('/:id', userController.detail);
router.get('/edit/:id', userController.editBoard);
router.put('/update/:id', userController.update);



module.exports = router;