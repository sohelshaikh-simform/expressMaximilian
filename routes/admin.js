const path = require('path');

const express = require('express');

const router = express.Router();

const controller=require('../controller/myControlller')

// const products=[]


router.route('/add-product').get(controller.addProductGet).post(controller.addProductPost);

// exports.routes=router;
module.exports=router;
