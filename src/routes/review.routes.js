const express = require('express');
const ReviewRoutes = express.Router();
const {userVerifyToken} = require('../../helper/userVerifyToken');

const { addReview, getAllReview ,  deleteReview } = require('../../Controller/User/review.controller');

// ADD REVIEW
ReviewRoutes.post('/addNewReview' , userVerifyToken,  addReview);

// GET ALL REVIEW
ReviewRoutes.get('/getAllReview' , userVerifyToken,  getAllReview);

// DELETE REVIEW
ReviewRoutes.delete('/deleteReview' , userVerifyToken , deleteReview);


module.exports = ReviewRoutes;