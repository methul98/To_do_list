const express=require('express');

const router=express.Router();
const homeController=require('../controllers/home_controller');
console.log('routes responding to the request');

router.get('/home',homeController.home);
module.exports=router;