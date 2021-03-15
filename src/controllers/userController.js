const path = require('path');
const db = require('../database/models');
const { Op } = require("sequelize");
const bcrypt = require('bcryptjs');
const { resolveSoa } = require('dns');
const { check, validationResult, body } = require("express-validator")


module.exports = {
    boardLogin: function (req, res) {
        res.render('pages/login');
    },

    login: function (req, res) {
        db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then(function (resultado) {
            if (resultado == null) {
                return res.send("Mail o contraseña incorrectos")
            }

            if (!bcrypt.compareSync(req.body.password, resultado.password)) {
                return res.send("Mail o contraseña incorrectos")
            };
            res.redirect("partials/header", { resultado: resultado })
        })
            .catch(function (error) {
                return res.send(error)
            })
    },



    registerBoard: function (req, res) {
        res.render('pages/register');
    },

    register: function (req, res) {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
            db.User.create({
                name: req.body.name,
                last_name: req.body.lastName,
                email: req.body.email,
                avatar: req.files[0].filename,
                password: bcrypt.hashSync(req.body.password, 12)
            })

                .then(function (user) {
                    let id = user.id;
                    return res.redirect("register/" + id)
                })
                .catch(function (error) {
                    return res.send(error)
                })
        } 
        else { return res.render("pages/register", {errors:errors.errors})}
    },







        detail: function (req, res) {
            db.User.findByPk(req.params.id)
                .then(function (user) {
                    res.render("pages/userPerfil", { user: user })
                })
                .catch(function (error) {
                    return res.send(error)
                })
        },

        editBoard: function (req, res) {
            db.User.findByPk(req.params.id)
                .then(function (user) {
                    res.render("pages/userEdit", { user: user })
                })
                .catch(function (error) {
                    return res.send(error)
                })
        },

        update: function (req, res) {
            db.User.update({
                name: req.body.name,
                last_name: req.body.lastName,
                email: req.body.email,
            }, {
                where: {
                    id: req.params.id
                }
            }).then(function () {
                let id = req.params.id;
                return res.redirect("../" + id)

            })
        }
    }