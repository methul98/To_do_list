//require the library
const mongoose=require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/Todo_List_db');

//aquire the connection(check if it is succesfull)
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,'Error in connecting to database'));

//up and running the database

db.once('open',function(){
    console.log("Succesfully connected to the database!");
})