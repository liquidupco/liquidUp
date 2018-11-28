let http = require("http");
let app = require('express')();
let express = require('express');
var router = express.Router();

httpserver = http.createServer(app);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

router.get('/', function (req, res) {
	res.sendfile(__dirname + '/theo.html');
});

httpserver.listen(8081);

console.log('Server running at http://127.0.0.1:8081/');