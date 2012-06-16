var http = require('http');

console.log('Welcome to http client.');

var request_options_array = [{
    agent : false /*Making sure we have no connection pooling 'on'.*/, 
    host: 'localhost', 
    port : 8888,
    path : '/',
},
{
    agent : false /*Making sure we have no connection pooling 'on'.*/, 
    host: 'localhost', 
    port : 8888,
    path : '/',
},
    {
    agent : false /*Making sure we have no connection pooling 'on'.*/, 
    host: 'localhost', 
    port : 8888,
    path : '/',
},
{
    agent : false /*Making sure we have no connection pooling 'on'.*/, 
    host: 'localhost', 
    port : 8888,
    path : '/',
}
];

if (!nitin) {
    var nitin = {};
}

(function() {
    if (!nitin['http']) {
        nitin.http = {};
    }
    
    var onData = function(request, response) {
        return function(data) {
            console.log('RESPONSE: ' + data);
        };
    }

    var onResponse = function(request) {
        return function(response) {
            response.on('data', onData(request, response));
        };
    }
    
    var onError = function(error) {
      console.log('Error: ' + error);
    }
        
    nitin.http.get = function(request_options_array) {
        for (var i = 0; i < request_options_array.length; i += 1) {
            request_options = request_options_array[i];
            var request = http.get(request_options);
            request.on('response', onResponse(request));
            request.on('error', onError);
        }
    };

})();



nitin.http.get(request_options_array);

console.log('===***===');

