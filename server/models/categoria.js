const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let categoriaSchema = new Schema({
    nombre: {
        type: String,
        default: '',
        desc: 'Se ingresa el nombre de la categoria',
        required: [true, 'El campo es obligatorio'],
    },
    usuario: {
        type: String,
        default: '',
        desc: 'Se ingresa el id del usuario',
        required: [true, 'El campo es obligatorio'],
    },
});

module.exports = mongoose.model('Categoria', categoriaSchema);