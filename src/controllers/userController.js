const path = require('path');
const db = require('../database/models');
const { Op } = require("sequelize");
const bcrypt = require('bcryptjs');
const session = require('express-session');


const { check, validationResult, body } = require("express-validator");


module.exports = {
    boardLogin: function (req, res) {
        res.render('pages/login');
    },

    login: function (req, res) {
        let errors = validationResult(req)

        if (errors.errors.length > 0) {
            res.render("pages/login", {
                errors: errors.errors,
            })
        } else {
            db.User.findOne({
                where: {
                    email: req.body.email
                }
            }).then(function (resultado) {
                let usuarioALoguear = resultado;
                if (usuarioALoguear != null) {
                    if (bcrypt.compareSync(req.body.password, usuarioALoguear.password)) {
                        req.session.usuarioLogueado = {
                            name: usuarioALoguear.name,
                            email: usuarioALoguear.email,
                            avatar: usuarioALoguear.avatar,
                            id: usuarioALoguear.id,
                            rol: usuarioALoguear.rol
                        }
                        if (req.body.recordame != undefined) {
                            res.cookie("recordame", usuarioALoguear.email, { maxAge: 60000 })
                        }

                        res.redirect("/")
                    } else {
                        return res.render("pages/login", {
                            errors: [
                                { msg: "Password incorrecto" }
                            ]
                        })
                    }
                }
                else {
                    return res.render("pages/login", {
                        errors: [
                            { msg: "Credenciales invalidas si no tienes cuenta. Registrate!" }
                        ]
                    })
                }
            })
                .catch(function (error) {
                    return res.send(error)
                })
        }
    },

    registerBoard: function (req, res) {
        res.render('pages/register');
    },

    register: function (req, res) {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            
            db.User.findOrCreate({
                where: { email: req.body.email },
                defaults: {
                    name: req.body.name,
                    last_name: req.body.lastName,
                    email: req.body.email,
                    avatar: req.files[0].filename,
                    password: bcrypt.hashSync(req.body.password, 12)
                }
            }).then(function (created, user) {
               
                if (created) {
                    console.log("creado", created)
                    //     let msgBienvenida = {
                    //         msg: "Te registrate con éxito. Ya puedes iniciar sesión!"
                    //     }
                    //    return res.render("pages/login", { msgBienvenida: msgBienvenida })
                } else {
                    console.log("no creado", created)
                    // return res.render("pages/register", {
                    //     errors: [
                    //         { msg: "El Email, ya fue registrado!" }
                    //     ]
                    // })
                }
                

            })

                .catch(function (error) {
                    return res.send(error)
                })
        } else { return res.render("pages/register", { errors: errors.errors }) }

    },


    detail: function (req, res) {
        db.User.findByPk(req.params.id,
            {
                attributes: ['name', 'last_name', "id", "avatar", "email"]
            })

            .then(function (user) {
                res.render("pages/userPerfil", { user: user })
            })
            .catch(function (error) {
                return res.send(error)
            })
    },

    editBoard: function (req, res) {
        db.User.findByPk(req.params.id,
            {
                attributes: ['name', 'last_name', "id", "avatar", "email"]
            })
            .then(function (user) {
                res.render("pages/userEdit", { user: user })
            })
            .catch(function (error) {
                return res.send(error)
            })
    },


    update: function (req, res) {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            if (req.files[0] === undefined) {
                db.User.update({
                     name: req.body.name,
                     last_name: req.body.lastName,
                     email: req.body.email,
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
                console.log(req.files[0].image)

                db.User.update({
                    name: req.body.name,
                    last_name: req.body.lastName,
                    email: req.body.email,
                    avatar: req.files[0].image,
                }, {
                    where: {
                        id: req.params.id
                    }
                })
                    .then(function (result) {
                        if (result == 1) {
                            return res.redirect("../" + req.params.id)
                        }
                    })
                    .catch(function (error) {
                        res.send(error)
                    })
            }
        } else {
            db.User.findByPk(req.params.id)
            .then(function (user) {

                        res.render("pages/userEdit", {
                            user: user,
                            errors: errors.errors
                        })
            })
        }
    },


    // update: function (req, res) {
    //     let errors = validationResult(req)
    //     if (errors.isEmpty()) {
    //         db.User.update({
    //             name: req.body.name,
    //             last_name: req.body.lastName,
    //             email: req.body.email,
    //         }, {
    //             where: {
    //                 id: req.params.id
    //             }
    //         }).then(function () {
    //             let id = req.params.id;
    //             return res.redirect("../" + id)

    //         })
    //     } else {

    //         db.User.findByPk(req.params.id,
    //             {
    //                 attributes: ['name', 'last_name', "id", "avatar", "email"]
    //             })
    //             .then(function (user) {
    //                 return res.render("pages/userEdit",
    //                     {
    //                         user: user,
    //                         errors: errors.errors
    //                     })
    //             })

    //             .catch(function (error) {
    //                 return res.send(error)
    //             })
    //     }

    // },


    logout: function (req, res) {
        req.session.destroy();
        res.redirect('./')
    }
}


