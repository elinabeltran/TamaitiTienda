const express = require('express');
const router = express.Router();
const apiUserController = require ("../../controllers/api/userController")

router.get('/', apiUserController.list);
router.get('/:id', apiUserController.detail);
router.post('/create', apiUserController.create);
router.put('/update/:id', apiUserController.update);
router.delete('/delete/:id', apiUserController.delete);



module.exports = router;