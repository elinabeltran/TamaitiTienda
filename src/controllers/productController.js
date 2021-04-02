const db = require('../database/models');
const { check, validationResult, body } = require("express-validator");


module.exports = {
    index: function (req, res) {
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

    cart: function (req, res) {
        res.render('pages/cart');
    },

    boardCreate: function (req, res) {
        db.Category.findAll()
            .then(function (categorias) {
                res.render("pages/productosCreate", { categorias: categorias })
            })
            .catch(function (error) {
                return res.send(error)
            })
    },

    create: function (req, res) {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            db.Product.findOrCreate({
                where: { name: req.body.name },
                defaults: {
                    name: req.body.name,
                    age: req.body.age,
                    description: req.body.description,
                    id_category: req.body.category,
                    img_url: req.files[0].filename,
                    price: req.body.price
                }
            }).then(function (created, product) {
                // console.log(created, product)
              
                db.Category.findAll()
                .then(function (categorias) {
                    console.log(created)
                if (!created) {
                         return res.render("pages/productosCreate", {
                            categorias: categorias,
                            errors: [
                                { msg: "Ya hay registrado un producto con este nombre!" }
                            ]
                        })
                    
                  }
                })

                return res.redirect("/products")

            })
                .catch(function (error) {
                    return res.send(error)
                })
        } else { 
            db.Category.findAll()
            .then(function (categorias) {
                return res.render("pages/productosCreate", 
                   { categorias: categorias,
                    errors: errors.errors})

            })
        }

    },


    detail: function (req, res) {
        let pedidoProducto = req.params.id;
        db.Product.findAll(
            { include: "category" }
        )
            .then(function (productos) {
                for (let i = 0; i < productos.length; i++) {
                    if (pedidoProducto == productos[i].id) {
                      return  res.render('pages/details', {
                            elProducto: productos[i],
                            productos: productos
                        })
                    }
                }
                res.send('Los siento, no tenemos este producto registrado')
            })

            
            .catch(function (error) {
                return res.send(error)
            })
    },


    edit: function (req, res) {
        db.Product.findByPk(req.params.id)
            .then(function (elProducto) {
                db.Category.findAll()
                    .then(function (categorias) {
                        res.render("pages/productEdit", {
                            elProducto: elProducto,
                            categorias: categorias
                        })
                    })
            })

            .catch(function (error) {
                return res.send(error)
            })
    },


    update: function (req, res) {
        let errors = validationResult(req)
        if (errors.isEmpty()) {

        db.Product.update({
            name: req.body.name,
            age: req.body.age,
            description: req.body.description,
            price: req.body.price,
            id_category: req.body.category,
            // img_url: req.files[0].filename
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(function (result) {
                console.log(result)
                if (result==1){
                    return res.redirect("../" + req.params.id)
                }
            })
            .catch(function (error) {
                res.send(error)
            })
   } else { 
        res.json(errors)

    }
},


    delete: function (req, res) {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (resultado) {
                res.redirect('/products')
            })
            .catch(function (error) {
                res.send(error)
            })
    },

    searchView: function (req, res) {
        res.render('pages/search', {
            productos: 0
        });
    },

    search: function (req, res) {
        db.Product.findAll({
            where: {
                name: {
                    [db.Sequelize.Op.like]: '%' + req.query.search + '%',
                }
            }
        })
            .then(function (productos) {
                return res.render('pages/search', {
                    productos: productos,
                    searchQuery: req.query.search
                })
            })
    },

    category: function (req, res) {
        db.Product.findAll(
            {
            where: {
                id_category:req.params.id, 
            }
        })
            .then(function (productos) {

                db.Category.findByPk (req.params.id)
                .then(function (category) {
                    console.log(category.name)
                    return res.render('pages/productsCategoria', {
                        category: category,
                        productos: productos,
                    })
                })

            })
            .catch(function (error) {
                res.send(error)
            })
    },


}

