const AdminJS = require('adminjs');
const AdminJSMongoose = require('@adminjs/mongoose');
AdminJS.registerAdapter(AdminJSMongoose);
const uploadFeature = require('@adminjs/upload')
const Category = require('../models/product');
const { productOption } = require('./options/products');
const options = {
  resources: [productOption],
  branding: {
    companyName: 'John Doe Family Business',
    logo:false,
    withMadeWithLove:false,
    // theme
  },
 
};

module.exports = options;
