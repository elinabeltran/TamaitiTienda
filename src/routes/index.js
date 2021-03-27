const express = require("express");
const router = express.Router();


const homeRouter = require('./homeRoutes');
const loginRouter = require('./loginRoutes');
const registerRouter = require('./registerRoutes');
const productsRouter = require('./productRoutes');
const apiProductsRouter = require('./api/productRoutes');
const apiUsersRouter = require('./api/userRoutes');




router.use('/', homeRouter);
router.use('/login', loginRouter);
router.use('/register', registerRouter); 
router.use('/products', productsRouter);          
router.use('/api/products', apiProductsRouter);                             
router.use('/api/users', apiUsersRouter);                             



module.exports = router;