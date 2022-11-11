var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: './docs/',
  port: 3000,
});

server.start(function () {
  console.log(`Server listening to http://localhost:${server.port}`);
});