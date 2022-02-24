var http = require('http');
var dt = require('./first-module.js');
var uc = require('upper-case');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  // res.write("The date and time are currently: " + dt.myDateTime());
  res.write(uc.upperCase(req.url));
  res.end();
}).listen(8080);