
var http = require("http");

http.createServer(function(req,res){
	res.writeHead(200,{'Contex-Type':'text/html'});
	res.write('<h1>Node.JS</h1>');
	res.end('<p>Hello penghuaichang</p>');
}).listen(8090);
console.log("HTTP server is listening on port 8090");