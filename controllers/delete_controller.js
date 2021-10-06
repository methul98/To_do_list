// import the module todolist
const TodoList=require('../models/todolist');

// controlloer fuction for delete from database
module.exports.delete_item=function(req,res)
{
    // console.log(req.body.check.length);
    
    let ids=req.body.check;
    // functon for delete when we select one item to delete
    if(typeof(ids)=="string")
    {
        TodoList.findByIdAndDelete(ids,function(err){
            if(err)
            {
                console.log("Error in deleting from db",err);
                return;
            }
        });
    }
    //functon for delete when we select multiple item to delete 
    else
    {
        for(let i=0;i<ids.length;i++)
        {
            TodoList.findByIdAndDelete(ids[i],function(err)
            {
                if(err)
                {
                    console.log("Error in deleting from db",err);
                    return; 
                }

            });
        }
    }
    return res.redirect('back');
}
