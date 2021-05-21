var express = require('express');
var app = express();
var myRouter = require('./myrouter.js');
app.use('/', myRouter);
const server = app.listen(3000, function ServerListener() {
    console.log('Sample App with router');
});