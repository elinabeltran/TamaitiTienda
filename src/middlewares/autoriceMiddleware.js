function autoriceMiddleware(req, res, next) {

    if (typeof req.session.usuarioLogueado != "undefined") {
        next();
    } else {
        res.redirect("../login")
    }
}
module.exports = autoriceMiddleware
