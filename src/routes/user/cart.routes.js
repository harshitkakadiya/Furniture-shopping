const express = require('express');
const cartRotes = express.Router();
// const { userVerifyToken } = require('../../helper/userVerifyToken');
const {userVerifyToken}=require('../../helper/userVerifyToken');

const {
    addToCart,
    getAllCarts,
    getCart,
    updateCart,
    deleteCart
} = require('../../Controller/User/cart.controller');

// ADD CART
cartRotes.post('/addCart', userVerifyToken, addToCart);

// GET ALL CART
cartRotes.get('/getAllCart', userVerifyToken, getAllCarts);

// GET SPECIFIC CART
cartRotes.get('/getCart', userVerifyToken, getCart);

// UPDATE CART
cartRotes.put('/updatecart', userVerifyToken, updateCart);

// DELETE CART
cartRotes.delete('/deleteCart', userVerifyToken, deleteCart);

module.exports = cartRotes;