const express = require('express');
const productRoute = express.Router();

const {
    getAllProducts,
    getProduct
} = require('../../Controller/User/product.controller');

// GET ALL PRODUCT
productRoute.get('/getAllProduct', getAllProducts);

// GET SPECIFIC PRODUCT
productRoute.get('/getProduct', getProduct);

module.exports = productRoute;