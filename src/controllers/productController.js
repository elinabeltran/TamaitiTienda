const db = require('../database/models');
const sequelize = db.sequelize;

const { check, validationResult, body } = require("express-validator");


module.exports = {
    index: function (req, res) {
        db.Product.findAll(
            {
                include: "category",
                // limit: 10,
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
                        {
                            categorias: categorias,
                            errors: errors.errors
                        })

                })
        }

    },
    ////-----------COMIENZA Prueba raw query

    // detailPrueba: function (req, res) {
    //     sequelize.query("SELECT * FROM product where id = " + req.params.id)
    //     .then (function(resultado){
    //         let product = resultado[0];
    //         res.send(product)

    //     })
    //     .catch(function (error) {
    //         return res.send(error)
    //     })
    // },
    ////-----------FIN Prueba raw query

    detail: function (req, res) {


        let pedidoProducto = req.params.id;
        db.Product.findAll(
            { include: "category" }
        )
            .then(function (productos) {
                for (let i = 0; i < productos.length; i++) {
                    if (pedidoProducto == productos[i].id) {
                        return res.render('pages/details', {
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

            if (req.files[0] === undefined) {
                db.Product.update({
                    name: req.body.name,
                    age: req.body.age,
                    description: req.body.description,
                    price: req.body.price,
                    id_category: req.body.category,
                }, {
                    where: {
                        id: req.params.id
                    }
                })

                    .then(function (result) {
                        console.log(result)
                        if (result == 1) {
                            return res.redirect("../" + req.params.id)
                        }
                    })
                    .catch(function (error) {
                        res.send(error)
                    })

            } else {
                db.Product.update({
                    name: req.body.name,
                    age: req.body.age,
                    description: req.body.description,
                    price: req.body.price,
                    id_category: req.body.category,
                    id_category: req.body.category,
                    img_url: req.files[0].filename,

                }, {
                    where: {
                        id: req.params.id
                    }
                })

                    .then(function (result) {
                        console.log(result)
                        if (result == 1) {
                            return res.redirect("../" + req.params.id)
                        }
                    })
                    .catch(function (error) {
                        res.send(error)
                    })
            }

        } else {

            db.Product.findByPk(req.params.id)
            .then(function (elProducto) {
                db.Category.findAll()
                    .then(function (categorias) {
                        res.render("pages/productEdit", {
                            elProducto: elProducto,
                            categorias: categorias,
                            errors: errors.errors

                        })
                    })
            })

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


    // delete2: function (req, res) {
    //     sequelize.query("DELETE FROM product where id = " + req.params.id)
    //     .then (function(resultado){
    //         let product = resultado[0];
    //         res.send("Producto eliminado con éxito")

    //     })
    //     .catch(function (error) {
    //         return res.send("Error al eliminar producto")
    //     })
    // },
    ////-----------FIN Prueba raw query

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
                    id_category: req.params.id,
                }
            })
            .then(function (productos) {

                db.Category.findByPk(req.params.id)
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

    age: function (req, res) {
        let selectAge = "";

        switch (req.params.id) {
            case 'age1':
                selectAge = '1 a 3 años'
                break;

            case 'age2':
                selectAge = "3 a 6 años"
                break;

            case 'age3':
                selectAge = "6 a 9 años"
                break;

            case 'age4':
                selectAge = "+9 años"
                break;
        }

        db.Product.findAll(
            {
                 where: {
                    age: selectAge,
                }
            })
            .then(function (productos) {

                db.Category.findAll()
                    .then(function (category) {
                        return res.render('pages/productsAge', {
                            category: category,
                            productos: productos,
                            age: selectAge,
                        })
                    })
            })


            .catch(function (error) {
                res.send(error)
            })
    },
}
