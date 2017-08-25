var http = require("http");
var server = http.createServer(function(request, response) {
	console.log("Received a request");
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("Hello, World!");
	response.end();
	console.log("Dispached a response");
});
server.listen(8080);
console.log("Server is listening at port 8080");
console.log("Point your browser at 'localhost:8080' or loopback IP '127.0.0.1:8080' to view the response.");
