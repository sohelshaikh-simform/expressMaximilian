const path = require('path');

const express = require('express');

const router = express.Router();

const controller=require('../controller/myControlller')

// const products=[]


router.get('/add-product',controller.addProductGet);
router.post('/add-product',controller.addProductPost);

// exports.routes=router;
module.exports=router;
