const db = require('../../database/models');


module.exports = {
    list: function (req, res) {
        db.Product.findAll({ include: "category" })
            .then(function (productos) {
                for (let i = 0; i < productos.length; i++) {
                    productos[i].setDataValue("endpoint", "/api/products/" + productos[i].id)
                }

                let respuestaApi = {
                    meta: {
                        status: 200,
                        url: "/api/products",
                        total: productos.length
                    },
                    data: productos
                }
                res.json(respuestaApi)
            })
            .catch(function () {
                res.json({ status: 500 })
            })
    },

    detail: function (req, res) {
        db.Product.findByPk(req.params.id, {
            include: "category"
        })
            .then(function (producto) {
                let respuestaApi = {
                    meta: {
                        status: 200,
                        url: "/api/products/" + producto.id,
                    },
                    data: producto
                }
                res.json(respuestaApi)
            })
            .catch(function () {
                res.json({ status: 500 })
            })
    },


    create: function (req, res) {
        db.Product.create({
            name: req.body.name,
            age: req.body.age,
            description: req.body.description,
            id_category: req.body.category,
            img_url: req.body.image,
            price: req.body.price
        })
            .then(function (result) {
                res.json({
                    status: 201,
                })
            })
            .catch(function () {
                res.json({ status: 500 })
            })
    },


    update: function (req, res) {
        db.Product.update({
            name: req.body.name,
            age: req.body.age,
            description: req.body.description,
            img_url: req.body.image,
            price: req.body.price
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(function (result) {
                if (result == 1) {
                    return res.json({ status: 201 })
                } else {
                    res.json({ status: 500 })
                }
            })
    },

    delete: function (req, res) {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function () {
                res.json({ status: 200 })
            })
            .catch(function (error) {
                res.json(error)
            })
    },

}