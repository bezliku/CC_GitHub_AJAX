var jsonServer = require("json-server");
var port = 8000;

var router = jsonServer.router("db.json");
var server = jsonServer.create();

server.use(router);
server.listen(port);

console.log('Server listening on port:', port);
console.log('Open: http://127.0.0.1:' + port);
