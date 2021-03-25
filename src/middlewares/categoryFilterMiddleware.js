const db = require('../database/models');


module.exports = function (req, res, next) {

    db.Category.findAll()
    .then(function (categorias) {
        res.locals.category = categorias
    })
    .catch(function (error) {
        return res.send(error)
    })

    next()
}

