const db = require('../../database/models');
const bcrypt = require('bcryptjs');


module.exports = {
    list: function (req, res) {
        db.User.findAll({
            attributes: ['name', 'last_name', "id", "avatar", "email"]
        })
            .then(function (users) {
                for (let i = 0; i < users.length; i++) {
                    users[i].setDataValue("endpoint", "/api/users/" + users[i].id)
                }

                let respuestaApi = {
                    meta: {
                        status: 200,
                        url: "/api/users",
                        total: users.length
                    },
                    data: users
                }
                res.json(respuestaApi)
            })
            .catch(function () {
                res.json({ status: 500 })
            })
    },


    detail: function (req, res) {
        db.User.findByPk(req.params.id, {
            attributes: ['name', 'last_name', "id", "avatar", "email"]
        })
            .then(function (user) {
                if (user == undefined) {
                    res.json({ status: 204 })
                } else {

                    let respuestaApi = {
                        meta: {
                            status: 200,
                            url: "/api/users/" + user.id,
                        },
                        data: user
                    }
                    res.json(respuestaApi)
                }

            })


            .catch(function () {
                res.json({ status: 500 })
            })
    },

    create: function (req, res) {
        db.User.findOrCreate({
            where: { email: req.body.email },
            defaults: {
                name: req.body.name,
                last_name: req.body.lastName,
                email: req.body.email,
                avatar: req.body.avatar,
                password: bcrypt.hashSync(req.body.password, 12)
            }
        }).then(function (created, user) {
            if (!created) {
                return res.json({ status: "400" })
            }
            return res.json({ status: "200" })
        })
            .catch(function () {
                res.json({ status: 500 })
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
            res.json({
                status: 200,
                url: "users/" + id
            })
        })
            .catch(function () {
                res.json({ status: 500 })
            })
    },

    delete: function (req, res) {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function () {
                res.json({ status: 200 })
            })
            .catch(function (errors) {
                res.json({ errors })
            })
    },


}