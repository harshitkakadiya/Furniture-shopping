const express = require('express');
const orderRoute = express.Router();
const {userVerifyToken} = require('../../helper/userVerifyToken');


const {
    addNewOrder,
    getAllOrders,
    getOrder,
    deleteOrder
} = require('../../Controller/User/order.controller');

// ADD NEW ORDER
orderRoute.post('/addNewOrder', userVerifyToken, addNewOrder);

// GET ALL ORDER
orderRoute.get('/getAllOrder', userVerifyToken, getAllOrders);

// GET SPECIFIC ORDER
orderRoute.get('/getOrder', userVerifyToken, getOrder);

// DELETE ORDER
orderRoute.delete('/deleteOrder', userVerifyToken, deleteOrder);

module.exports = orderRoute;