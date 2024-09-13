const express = require('express');
const FavoriteRoutes = express.Router();
const {userVerifyToken} = require('../../Helper/userVerifyToken');

const { addNewFavorite,  deleteFavorite, getAllFavorite } = require('../../Controller/User/favorite.controller');

// ADD NEW FAVORITE
FavoriteRoutes.post('/addNewFavorite' , userVerifyToken ,  addNewFavorite);

// GET ALL FAVORITE
FavoriteRoutes.get('/getAllFavorite', userVerifyToken, getAllFavorite);

// DELETE FAVORITE
FavoriteRoutes.delete('/deleteFavorite' , userVerifyToken , deleteFavorite);

module.exports = FavoriteRoutes;