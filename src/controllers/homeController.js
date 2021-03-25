const db = require('../database/models');
const { Op } = require("sequelize");



module.exports = {
    index: function (req, res) {
     
        db.Product.findAll({ limit: 6 })
            .then(function (productos) {
                res.render("pages/home", { productos: productos })
            })
            .catch(function (error) {
                return res.send(error)
            })
    }
    

}