const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const methodOverride= require('method-override');
const session= require('express-session');
const cookieParser= require('cookie-parser')

const verSession= require('./src/middlewares/verSession');
const middlewareUsuarioLogueado= require('./src/middlewares/renderUsuarioLogueado');
const categoryFilterMiddleware= require('./src/middlewares/categoryFilterMiddleware');
const recordUserMiddleware= require('./src/middlewares/recordUserMiddleware');


const indexRouter = require('./src/routes/index');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));


////Middleware GLOBAL

app.use(express.static(path.join(__dirname, './public')));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({secret:"Secreto de session Tamaiti"}));
app.use(verSession);
app.use(cookieParser())
app.use(middlewareUsuarioLogueado);
app.use(categoryFilterMiddleware);
app.use(recordUserMiddleware);



app.use('/', indexRouter);
app.use(function(req, res, next) {
    res.status(404).render('pages/404error');
  });


app.listen(port, function(){
    console.log(`El servidor esta funcionando sobre http://localhost:${port}`)
})