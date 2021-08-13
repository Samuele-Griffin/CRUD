// Importacion de librerias
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Usuario = require("../models/usuario.js");
const bcrypt = require("bcrypt");
const underscore = require("underscore");

// Configuracion de bodyParser
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// Rutas y funciones middleware de express

// Actualizar PUT
app.put("/usuarios/:id", (req, res) => {
    let id = req.params.id;
    let body = underscore.pick(req.body, [
        "nombre",
        "email",
        "role",
        "estado",
        "img",
    ]);

    Usuario.findByIdAndUpdate(
        id,
        body, { new: true, runValidators: true, context: "query" },
        (err, usuariodb) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    error: err,
                });
            }
            res.json({
                ok: true,
                usuario: usuariodb,
            });
        }
    );
});

// Dar de Alta POST
app.post("/usuarios", (req, res) => {
    let body = req.body;
    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role,
    });
    usuario.save((err, usuariodb) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                error: err.errors,
            });
        }
        res.json({
            ok: true,
            usuario: usuariodb,
        });
    });
});

// Eliminar DELETE
app.delete("/usuarios/:id", (req, res) => {
    let id = req.params.id;
    let user = {
        estado: false,
    }
    Usuario.findByIdAndUpdate(id, user, { new: true }, (err, usuarioBorrado) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                error: err,
            });
        }
        if (!usuarioBorrado) {
            return res.status(400).json({
                ok: false,
                error: {
                    error: "Usuario no encontrado",
                },
            });
        }
        return res.json({
            ok: true,
            message: "Se elimina el usuario de la base de datos " + id,
            usuario: usuarioBorrado,
        });
    });
});

// Consultar GET
app.get("/usuarios", (req, res) => {

    let desde = Number(req.query.desde || 0);
    let hasta = Number(req.query.hasta || 0);

    Usuario.find({ estado: true }, "nombre email google estado role img")
        .skip(desde)
        .limit(hasta)
        .exec((err, usuarios) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    error: "No se encuentran los usuarios a listar",
                });
            }
            Usuario.count({ estado: true }, (err, conteo) => {
                res.status(200).json({
                    ok: true,
                    ...usuarios,
                    conteo,
                });
            });
        });
});

//Exportar Clase
module.exports = app;