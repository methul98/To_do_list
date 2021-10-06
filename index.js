// get the express function reffernece
const express =require('express');
//define port number
const port=8000;

//import mongoose.js
const db=require('./config/mongoose');
const app=express();
//function  to recognize the incoming Request Object as strings or arrays
app.use(express.urlencoded());

//middlware which send all incomming req to routes/index
app.use('/',require('./routes/index'));

//make express to looks up the file relative to the static directory
app.use(express.static('assets'));

//setting up view engine
app.set('view engine','ejs');
app.set('views','./views');


//function to run the server on port 8000 
app.listen(port,function(err){
     if(err)
     {
         console.log(`Error:${err}`);
     }
     console.log(`server up and running on the port ${port}`);
})
