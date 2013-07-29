var fs = require('fs');
var h = {
	'/': function(response){
		console.log('path: /')
		// fs.readFile('/app/index.html', function(err, html){
		// 	response.writeHead(200, {'Content-Type': 'text-html'});
		// 	response.write(html);
		// 	response.end();
		// });
		
		fs.readFile('./app/index.html', function(err, html){
			console.log('read:', err, html)
			response.writeHead(200, {'Content-Type': 'text-html'});
			response.write(html);
			response.end();
		})
		
		
	}
};
exports.map = h;