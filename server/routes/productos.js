const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Producto = require('../models/producto.js');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post('/productos', (req, res) => {
    let body = req.body;
    let producto = new Producto({
        nombre: body.nombre,
        precioUni: body.precio,
        categoria: "1",
        disponible: true,
        usuario: "1",
    });
    producto.save((err, productosdb) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                error: 'No se guarda en la base de datos el producto en cuestion',
            });
        } else {
            res.json({
                ok: true,
                productos: productosdb,
            });
        }
    });
});

app.put('/productos/:id', (req, res) => {
    let body = req.body;
    let id = req.params.id;

    Producto.findByIdAndUpdate(id, body, (err, productosdb) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err.errors,
            });
        } else {
            res.json({
                ok: true,
                message: 'Se actualizo corretamente',
                producto: productosdb,
            });
        }
    });

});

app.get('/productos', (req, res) => {

});

app.delete('/productos/:id', (req, res) => {

});

module.exports = app;