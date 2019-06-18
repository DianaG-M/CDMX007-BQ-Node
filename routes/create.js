const { Breakfast, Food } = require('../models/Products.js');

module.exports = (app) => {
    app.get('/breakfast', (req, res) => {
        Breakfast.find({}, (err, breakfast) => {
            if (err) {
                return err;
            } else {
                res.send(breakfast);
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
};