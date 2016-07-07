'use strict';

var http = require('http');
var port = process.env.PORT || 4000;

http.createServer(handler).listen(port, listening);

function listening () {
  console.log('Server up on port %s.', port);
}

function handler (req, res) {
  redirect(res, 301, 'https://ponyfoo.com' + req.url);
}

function redirect (res, status, url) {
  res.writeHead(status, { Location: url });
  res.end();
}
