const express= require('express');
const router=express.Router();

const usersController = require('../controllers/users_controller');

//this is basically for the url of(./users/profile)
router.get('/profile',usersController.profile);

module.exports = router;
