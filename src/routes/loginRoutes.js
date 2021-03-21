const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const validatorLoginMiddleware = require('../middlewares/validatorLoginMiddleware');



router.get('/', userController.boardLogin);
router.post('/', validatorLoginMiddleware,userController.login);
router.get('/check', 

function(req,res){
    console.log(req.session.usuarioLogueado)
    if (req.session.usuarioLogueado == undefined){
        res.send ("no estas logueado")
    }else{
        res.send ("Hola"+req.session.usuarioLogueado.name)
   }
}
);

module.exports = router;