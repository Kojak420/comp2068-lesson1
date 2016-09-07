//link to the node http library
var http = require('http');

//use callback to start an http server
http.createServer(function(requires,response){
    //start the http server with access to the request & response objects
    response.writeHead(200); //request OK
    response.end('First node page');
}).listen(3000);

console.log('Server running on port 3000');