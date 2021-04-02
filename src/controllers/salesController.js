const db = require('../database/models');
const { check, validationResult, body } = require("express-validator");


module.exports = {
    cart: function (req, res) {
        res.render('pages/cart');
    },

    addCart: function (req, res) {
        db.Product.findByPk(
           { where: {
               [db.Sequelize.Op.like]: req.query,
           },
               
            include: "category"},

        )



        res.render('pages/cart');
    },




    listLast: function (req, res) {
        db.Product.findAll(
            { include: "category",
             limit: 6,
             order: [
                ['id', 'DESC'],
            ],
        },
        )
            .then(function (productos) {
                res.render("pages/products", { productos: productos })
            })
            .catch(function (error) {
                return res.send(error)
            })
    },


  
}

