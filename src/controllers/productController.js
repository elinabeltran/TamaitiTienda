const path = require('path');
const db = require('../database/models');
const { Op } = require("sequelize");

module.exports = {
    index: function (req, res) {
        db.Product.findAll({ })
            .then(function (productos) {
                console.log(productos)
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
        db.Product.create({
            name: req.body.name,
            age: req.body.age,
            description: req.body.description,
            id_category: req.body.category,
            img_url: req.files[0].filename,
            price: req.body.price
        })
            .then(function (producto) {
                res.redirect("/");
                db.Category.findOne({
                    where: { name: req.body.category }
                })
                    .then(function (categoriaSeleccionada) {
                        db.Product.update({ id_category: categoriaSeleccionada.id }, {
                            where: {
                                id: producto.id
                            }
                        });
                    })
            })
            .catch(function (error) {
                return res.send(error)
            })
        res.redirect('/products')
    },


    detail: function (req, res) {
        let pedidoProducto = req.params.id;
        db.Product.findAll()
            .then(function (productos) {
                for (let i = 0; i < productos.length; i++) {
                    if (pedidoProducto == productos[i].id) {
                        res.render('pages/details', {
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
        .then(function(productoActualizado){
            res.send(productoActualizado)
        })
    },

    
    delete: function (req, res){
        db.Product.destroy({ 
            where: {
                 id: req.params.id
                 }
            })
         .then(function(resultado) {
             res.redirect('/products')
         })
         .catch(function(error) {
              res.send(error)
         })
    },

    searchView: function (req, res) {
        res.render('pages/search',{
            productos:0
        });
    },

    search: function(req, res) {
        console.log(req.query)
        db.Product.findAll({
            where: {
                name: {
                    [db.Sequelize.Op.like]: '%' + req.query.search + '%',
                }
            }
        })
        .then(function(productos) {
            return res.render('pages/search', {
                productos: productos,
                searchQuery: req.query.search
            })
        })
    },


}

