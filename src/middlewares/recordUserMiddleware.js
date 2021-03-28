const db = require('../database/models');

module.exports = function (req, res, next) {
    if (typeof req.cookies.recordame != undefined &&
        typeof req.session.usuarioLogueado == undefined) {
        db.User.findOne({
            where: {email: req.cookies.recordame}
        })
        .then(function (usuario) {
            let usuarioALoguear = usuario;
            req.session.usuarioLogueado = {
                name: usuarioALoguear.name,
                email: usuarioALoguear.email,
                avatar: usuarioALoguear.avatar,
                id: usuarioALoguear.id,
                rol: usuarioALoguear.rol
            };
        });
    };
    next()
}