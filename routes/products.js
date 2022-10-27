const express = require('express');
const {getPopularProducts} =require('../controllers/products');
const productsRoutes = express.Router();
productsRoutes.get('/popular',getPopularProducts);
module.exports = productsRoutes;

