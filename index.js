const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const authMiddleware = require('./middleware/auth');
const errorHandler = require('./middleware/error');
const routes = require('./routes');
const pkg = require('./package.json');


const { port, mongoUrl, secret } = config;
const app = express();


// Conectar aplicación a MongoDB
mongoose.connect(mongoUrl, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
    if (err) {
        return err;
    } else {
        console.log('Conectado con Mongo');
    }
});


app.set('config', config);
app.set('pkg', pkg);


app.use(express.json());
app.use(authMiddleware(secret));


// Registrar rutas
routes(app, (err) => {
    if (err) {
        throw err;
    }

    // Registro de "middleware" que maneja posibles errores
    app.use(errorHandler);

    app.listen(port, () => console.log(`App listening on port ${port}`));
});



const { Breakfast, Food } = require('./models/Products.js');

app.get('/desayuno', (req, res) => {
    Breakfast.find({}, (err, breakfast) => {
        if (err) {
            return err;
        } else {
            res.send(breakfast);
            console.log(breakfast);
        }
    });
});

app.get('/food', (req, res) => {
    Food.find({}, (err, food) => {
        if (err) {
            return err;
        } else {
            console.log(food);
            res.send(food);
        }
    });
});

// app.get('/breakfast/:id', (req, res) => {
//     Breakfast.find({}, (err, breakfast) => {
//         if (err) {
//             return err;
//         } else {
//             console.log(breakfast);
//             res.send(breakfast);
//         }
//     });
// });