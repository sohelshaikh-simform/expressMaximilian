const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine','hbs')
// app.set('views','views')

app.set('views',path.join(__dirname,'views','handlebar'))
// app.use(express.json())

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController=require('./controller/error')
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.checkError);

app.listen(3000,"localhost",()=>{
    console.log("port is listienig on 3000")
});
