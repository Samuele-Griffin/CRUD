require('./config/config.js');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const colors = require('colors');


// Uso de rutas locales
app.use(express.static(__dirname + '/public'));
// ===================================================

// Establecer conexion con el servidor local o de desarrollo
app.get('/', (req, res) => {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.write(JSON.stringify('Servidor Funcionando'));
    res.end();
});

// ===================================================

// Uso de rutas de los usuarios desde el archivo de users.js
app.use(require('./routes/users'), (req, res) => {
    res.write("");
    res.end();
});
app.use(require('./routes/productos'), (req, res) => {
    res.write("");
    res.end();
});
app.use(require('./routes/categorias'), (req, res) => {
    res.write("");
    res.end();
});
// ===================================================


// Establecer conexion con la base de datos de MongoDB
mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err, resp) => {
    if (err) {
        throw new Error('Ha ocurrido un error' + err);
    }
    console.log("Conexion exitosa con la base de datos en el puerto 27017".green);
});
// ===================================================


// Uso de los puertos
app.listen(process.env.PORT, () => {
    console.log(colors.green("Escuchando el puerto " + process.env.PORT));
});
// ===================================================