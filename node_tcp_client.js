var net = require('net');

console.log('Welcome to socket pool.');

if (!nitin) {
    var nitin = {};
}

(function() {
    if (!nitin['sockets']) {
        nitin.sockets = {};
    }
    
    var xsockets = new Array();
    var count = 500;
    var cursor = 0;
    
    var onData = function(socket) {
        return function(data) {
            console.log('RESPONSE: ['+ socket.address().port +']'+ data);
        };
    }
    
    var onConnect = function(socket) {
      return function() {
          console.log('address ', socket.address().address, ':', socket.address().port);
      };
    }
    
    var onEnd = function() {
      console.log('DONE');
    }
    
    var onError = function(error) {
      console.log('Error: ' + error);
    }
    
    nitin.sockets.createSocketPool = function() {
        for (var i = 0; i < count; i++) {
            xsockets[i] = new net.Socket();
            xsockets[i].on('data', onData(xsockets[i]));
            xsockets[i].on('connect', onConnect(xsockets[i]));
            xsockets[i].on('end', onEnd);
            xsockets[i].on('error', onError);
            xsockets[i].connect(7000, 'localhost');
        }
    }
    
    nitin.sockets.sendDate = function() {
        cursor = ( cursor + 1) % count;
        xsockets[cursor].write('{'+cursor+'}');
    }
    
})();

nitin.sockets.createSocketPool();

var sendData = function() {    
    for (var i = 0; i < 50; i++) {
        nitin.sockets.sendDate();
    }
};

setInterval(sendData, 1);

console.log('===***===');


