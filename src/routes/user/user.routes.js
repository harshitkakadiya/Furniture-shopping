const express = require('express');
const userRoute = express.Router();
const { userVerifyToken } = require('../../helper/userVerifyToken');
const {
    registerUser,
    loginUser,
    getAllUser,
    getUser,
    updateUser,
    deleteUser,
    updatePassword
} = require('../../controller/user/user.controller');


// REGISTER USER
userRoute.post('/registerUser',registerUser);

// LOGIN USER
userRoute.post('/loginUser',loginUser);

// GET ALL USER
userRoute.get('/getAllUser',userVerifyToken, getAllUser);

// GET SPECIFIC USER
userRoute.get('/getUser',userVerifyToken, getUser);

// UPDATE USER
userRoute.put('/updateUser',userVerifyToken, updateUser);

// DELETE USER
userRoute.delete('/deleteUser',userVerifyToken, deleteUser);

// UPDATE PASSWORD
userRoute.put('/updatePassword',userVerifyToken, updatePassword);

module.exports = userRoute;