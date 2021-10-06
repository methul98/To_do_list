const mongoose=require('mongoose');

//define the to do list schema
const TodoListSchema=new mongoose.Schema({
    description:{
       type:String,
       required:true
   },
   category:{
       type:String,
       required:true
   },
   date:{
       type:String,
       required:true
   }
});

//create a collection of TodoListSchema database
const TodoList=mongoose.model('TodoList',TodoListSchema);

//export the module
module.exports=TodoList;