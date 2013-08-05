var http = require("http");
var url = require("url");

function start( route, handle ){
	http.createServer(function(request, response) {
		if(request.url === '/favicon.ico'){return false;}
		var pathname = url.parse( request.url ).pathname;
		route(handle || {}, pathname, request, response);
	}).listen(8888);
}


exports.start = start;