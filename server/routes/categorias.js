const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.put('/categorias/:id', (req, res) => {
    let categorias = {
        id: req.params.id,
        body: req.body,
    }
    if (categorias.body.nombre === undefined) {
        res.status(404).json({
            ok: false,
            message: 'Error 404, el archivo o condicion invalida',
        });
    } else {
        res.write(JSON.stringify(categorias));
        res.end();
    }
});

app.post('/categorias', (req, res) => {
    let categorias = {
        body: req.body,
    }
    if (categorias.body.nombre === undefined) {
        res.status(404).json({
            ok: false,
            message: 'Error 404, el archivo o condicion invalida',
        });
    } else {
        res.write(JSON.stringify(categorias));
        res.end();
    }
});

app.get('/categorias', (req, res) => {
    let categorias = {
        body: req.body,
    }
    if (categorias.body.nombre === undefined) {
        res.status(404).json({
            ok: false,
            message: 'Error 404, el archivo o condicion invalida',
        });
    } else {
        res.write(JSON.stringify(categorias));
        res.end();
    }
});

app.delete('/categorias/:id', (req, res) => {
    let categorias = {
        id: req.params.id,
    }
    res.write(JSON.stringify(categorias));
    res.end();
});

module.exports = app;