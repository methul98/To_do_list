// get the express function reffernece
const express=require('express');
// create new router object
const router=express.Router();
//import the homecontroller ,add controller,delete controller
const homeController=require('../controllers/home_controller');
const addController=require('../controllers/add_data_controller');
const  deleteController=require('../controllers/delete_controller');
console.log('routes responding to the request');

//route for /home ,/to_do_list,/delete_list/ requets
router.get('/home',homeController.home);
router.post('/to_do_list',addController.add);
router.post('/delete_list/',deleteController.delete_item);
// exports the module
module.exports=router;