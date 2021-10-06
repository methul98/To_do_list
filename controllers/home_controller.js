// import the module todolist
const TodoList=require('../models/todolist');

//function for render home page and pass to do list items as list
module.exports.home=function(req,res){
    TodoList.find({},function(err,to_do_list)
    {
        if(err)
        {
            console.log("Error in fetching data from DB");
            return;
        }
        return res.render('home',
       {
         title : "TO DO LIST",
         list : to_do_list
       });
    }
  )
}