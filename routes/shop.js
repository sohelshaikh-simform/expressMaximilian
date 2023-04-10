const path = require('path');

const express = require('express');

const router = express.Router();
const controller =require('../controller/myControlller')

router.get('/',controller.shopProduct)

module.exports = router;
  