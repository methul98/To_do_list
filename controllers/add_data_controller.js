// import the module todolist
const TodoList=require('../models/todolist');

// controller for add data into database
module.exports.add=function(req,res)
{
    
    TodoList.create({
         description:req.body.description,
         category:req.body.category,
         date:req.body.date
    },function(err,newList)
       {
            if(err)
            {
                console.log("Error in creating todolist");
                return;
            }

            console.log('*********',newList);
            return res.redirect('back');
       });
}