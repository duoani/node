var fs = require('fs');

function route( handle, pathname, request, response ){
	var h = handle[pathname];

	if( typeof(h) === 'function' ){
		h(response);

	}else{
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
	}
}
exports.route = route;