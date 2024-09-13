const express = require('express');
const productRoute = express.Router();

const {
    getAllProducts,
    getProduct
} = require('../../controller/user/product.controller');

// GET ALL PRODUCT
productRoute.get('/getAllProduct', getAllProducts);

// GET SPECIFIC PRODUCT
productRoute.get('/getProduct', getProduct);

module.exports = productRoute;