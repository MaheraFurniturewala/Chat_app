//module callled express.Router which helps separate the app route and the control

const express= require('express');
//everytime we require express it will not create a new instance of express
//it wil fetch the existing instance
//express is created only once 


//creating route handlers
const router= express.Router();
console.log('router loaded');

//first dot is to move out of route folder first and ./ for moving to a parallel folder of controllers
const homeController = require('../controllers/home_controller')

router.get('/',homeController.home);



//need to export this so that it is available to index.js
//generally exports and module.exports do the same thing but not here
//here just exports wont work
module.exports=router;
//now once we have exported we need to tell app to use it.