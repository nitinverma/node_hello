var assert = require('assert');
var net = require('net');
var server = net.createServer();
server.listen(function () {
  var client = net.createConnection(server.address().port);
  // server's connect event has not yet fired
  server.close();
  assert.doesNotThrow(function() {
    client.remoteAddress;
    client.remotePort;
  });
  process.exit(0);
});
