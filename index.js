let http = require("http");
let app = require('express')();
let express = require('express');

httpserver = http.createServer(app);

//app.use('/ar', require('./ar.js'));
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

httpserver.listen(8081);

console.log('Server running at http://127.0.0.1:8081/');