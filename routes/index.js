const express = require('express');
const productsRoutes = require('./products');


const apiRouter = express.Router();
apiRouter.use('/api/products', productsRoutes);
module.exports = apiRouter;