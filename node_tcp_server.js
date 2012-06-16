var net = require('net');


console.log('Welcome to server socket.');

var server = net.createServer(function (socket) {

    var onData = function(socket) {
        return function(data) {
        console.log('RESPONSE: [' + socket.remotePort + ']'+ data);
        socket.write(data);
        };
    }
    
    var onConnect = function(socket) {
        return function() {
            console.log('remoteAddress ', socket.remoteAddress, ':', socket.remotePort);
        };
    }
    
    var onEnd = function() {
        console.log('DONE');
    }
    
    var onError = function(error) {
        console.log('Error: ' + error);
    }
    
    
    socket.on('data', onData(socket));
    socket.on('connect', onConnect(socket));
    socket.on('end', onEnd);
    socket.on('error', onError);
  
});

server.listen(7000, "localhost");

