const express = require('express');
const app = express();
const path = require('path');
const port = process.env.port || 3000;
const methodOverride= require('method-override');
const session= require('express-session');



const indexRouter = require('./src/routes/index');
const logMiddleware = require('./src/middlewares/logMiddleware');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.static(path.join(__dirname, './public')));

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));


app.use('/', indexRouter);
app.use(function(req, res, next) {
    res.status(404).render('pages/404error');
  });
app.use(logMiddleware);
app.use(session({secret:"Secreto de session"}));


app.listen(port, function(){
    console.log(`El servidor esta funcionando sobre http://localhost:3000`)
})