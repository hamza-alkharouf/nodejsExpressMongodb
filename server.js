const express = require('express');
const app = express();
const path = require('path')
const db =require('./config/database')
const index = require('./routes/index')


// set the view engine to ejs
app.set('view engine', 'ejs');
// use res.render to load up an ejs view file
app.use(express.static(__dirname + '/public'));
app.use(express.static('node_modules'));


// index page
app.use('/', index)

app.listen(8080);
console.log('Server is listening on port 8080');