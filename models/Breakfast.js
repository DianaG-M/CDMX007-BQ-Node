// Importaciones y requerimientos
const mongoose = require('mongoose');


// Schema

const BreakfastModel = mongoose.Schema({
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

const Breakfast = mongoose.model('Breakfast', BreakfastModel, 'breakfast');
const Food = mongoose.model('Food', BreakfastModel, 'food');


//Exportación

module.exports = { Breakfast, Food };