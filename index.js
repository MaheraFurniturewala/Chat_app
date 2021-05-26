//const because we do not want that variable to be overwritten by anyone in the code
const express = require('express');
const app=express();
//by default websites run on port->80
//at producction level or when we deploy it on live server it is port -> 80
const port=8000;
//use express router
//middleware
//before the server starts up it needs to access this route
//for any further url's defined in this file, we are routing the home part to it(/).

app.use('/',require('./routes/index'));

//using ejs as view engine
//setup the view enngine
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,(err)=>{
    if(err){
        //Interpolation::(template strings)(backtiks)
        console.log(`Error in running the server: ${err}`);
        
    }
    else{
        console.log(`Server is running on port: ${port}`);
    }
})