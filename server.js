const express = require('express');
const app = express();
const path = require('path')
const db =require('./config/database')
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('connect-flash');


// set the view engine to ejs
app.set('view engine', 'ejs');
// bring body parser 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// use res.render to load up an ejs view file
app.use(express.static(__dirname + '/public'));
app.use(express.static('node_modules'));

//session and flash config
app.use(session({
    secret:'hamza',
    resave:false,
    saveUninitialized:false,
    cookie: {maxAge: 60000 *15}
}))
app.use(flash())

// index page
const index = require('./routes/index')
app.use('/', index)
 
app.listen(8080);
console.log('Server is listening on port 8080');