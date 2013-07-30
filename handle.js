var fs = require('fs');
var h = {
	'/': function(response){
		
		fs.readFile('/app/index.html', function(err, html){
			response.writeHead(200, {'Content-Type': 'text-html'});
			response.write(html);
			response.end();
		});
	}
};
exports.map = h;
