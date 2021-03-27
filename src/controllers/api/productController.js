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
            .catch(function (error) {
                return res.send(error)
            })
    },

    detail: function (req, res) {
        db.Product.findOne({
            include: "category"
        }, {
            where: { id: req.params.id }
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
            .catch(function (error) {
                return res.send(error)
            })
    },


    create: function (req, res) {
        db.Product.Create({
            name: req.body.name,
            age: req.body.age,
            description: req.body.description,
            id_category: req.body.category,
            img_url: req.files[0].filename,
            price: req.body.price
        })
        .then(function (product) {
            res.json({
                status: 201,
                data:product
            })
        })
    },


    update: function (req, res) {
        db.Product.update({
            name: req.body.name,
            age: req.body.age,
            description: req.body.description,
            price: req.body.price
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(function (result) {
                if (result==1){
                    return res.json({
                        status:201,
                    })
                }
            })
            .catch(function (error) {
                res.json(error)
            })
},




}