const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.options('*', cors());
const path = require('path');
const babelPolyFill = require('@babel/polyfill');
const helpers = require('./psql_server_helpers.js');

app.use(express.static(path.join(__dirname, '/../../dist')));

app.get('/products/:product/', function(req, res) {
    var productParam = req.params.product;
    helpers.getItem(productParam, ((result) => {
        res.send(result);
    }));
});

app.post('/products/', function(req, res) {
    var product = req.body.product;
    var imageName = req.body.imageName;
    var color = req.body.color;
    var url = req.body.url;
    var alt = req.body.alt;
    helpers.createItem(product, imageName, color, url, alt, ((result) => {
        res.send(result);
    }));
});

app.delete('/products/:product/', function(req, res) {
    var product = req.params.product;
    helpers.deleteItem(productParam, ((result) => {
        res.send('202 DELETE');
    }));
});

app.put('/products/:product/', function (req, res) {
    var product = req.body.product;
    var imageName = req.body.imageName;
    var color = req.body.color;
    var url = req.body.url;
    var alt = req.body.alt;
    helpers.updateItem(product, imageName, color, url, alt, ((result) => {
        res.send(result);
    }));
});

module.exports = app;
