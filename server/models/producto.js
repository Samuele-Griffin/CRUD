const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let productoSchema = new Schema({
    nombre: {
        type: String,
        default: '',
        desc: 'Se ingresa el nombre del producto',
        required: [true, 'El campo es obligatorio'],
    },
    precioUni: {
        type: Number,
        default: '',
        desc: 'Se ingresa el id del usuario',
        required: [true, 'El campo es obligatorio'],
    },
    categoria: {
        type: String,
        default: '',
        desc: 'Se ingresa el id de la categoria',
        required: [true, 'El campo es obligatorio'],
    },
    disponible: {
        type: Boolean,
        default: false,
        desc: 'Se ingresa el stock del producto',
        required: [true, 'El campo es obligatorio'],
    },
    usuario: {
        type: String,
        default: '',
        desc: 'Se ingresa el id del usuario',
        required: [true, 'El campo es obligatorio'],
    },
});

module.exports = mongoose.model('Producto', productoSchema);