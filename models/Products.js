// Importaciones y requerimientos
const mongoose = require('mongoose');


// Schema

const ProductsModel = mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: 1
    },
    type: {
        type: String,
        require: true
    },
    ticket: {
        type: String,
        require: true
    },
    nombre: {
        type: String,
        require: true,
        unique: 1
    },
    img: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
        require: true
    }
});

// conversion a modelo

const Breakfast = mongoose.model('Products', ProductsModel, 'desayuno');
const Food = mongoose.model('Products', ProductsModel, 'food');


//Exportación

module.exports = { Breakfast, Food };