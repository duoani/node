var http = require("http");
var url = require("url");
var fs = require("fs");

function start( route, handle ){
	http.createServer(function(request, response) {
		if(request.url === '/favicon.ico'){return false;}
		var pathname = url.parse( request.url ).pathname;
		console.log(pathname)

		var realPath = "app" + pathname;
		console.log('realPath:', realPath)
	    fs.exists(realPath, function (exists) {
	    	console.log(exists)
	        if (!exists) {
	            response.writeHead(404, {
	                'Content-Type': 'text/plain'
	            });

	            response.write("This request URL " + pathname + " was not found on this server.");
	            response.end();
	        } else {
	            fs.readFile(realPath, "binary", function (err, file) {
	                if (err) {
	                    response.writeHead(500, {
	                        'Content-Type': 'text/plain'
	                    });

	                    response.end(err);
	                } else {
	                    response.writeHead(200, {
	                        'Content-Type': 'text/html'
	                    });

	                    response.write(file, "binary");

	                    response.end();
	                }
	            });
	        }
	    });

		//route(handle || {}, pathname, response);
	}).listen(8888);
}


exports.start = start;