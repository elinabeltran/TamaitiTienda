const path = require('path');
const db = require('../database/models');
const { Op } = require("sequelize");

module.exports = {
    login: function (req, res) {
        res.render('pages/login');
    },
    registerBoard: function (req, res) {
        res.render('pages/register');
    },

    register: function (req, res) {
        db.User.create({
            name: req.body.name,
            last_name: req.body.lastName,
            email: req.body.email,
            avatar: req.files[0].filename,
            password: req.body.password
        })
            .then(function (user) {
                res.redirect("pages/userPerfil", { user: user });

            })
            .catch(function (error) {
                return res.send(error)
            })
    },

    detail: function (req, res) {
        db.User.findByPk(req.params.id)
            .then(function (user) {
                res.render("pages/userPerfil", {user:user})
            })
            .catch(function (error) {
                return res.send(error)
            })
    },

    editBoard: function (req, res) {
        db.User.findByPk(req.params.id)
            .then(function (user) {
                res.render("pages/userEdit", {user:user})
            })
            .catch(function (error) {
                return res.send(error)
            })
    },

    update: function (req, res) {
        console.log(req.body)

        db.User.update({
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function(userUpdated){

            res.send(userUpdated)
        })
    },

}