function route( handle, pathname, response ){
	var h = handle[pathname];

	if( typeof(h) === 'function' ){
		h(response);
	}else{
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write('400 not found');
		response.end();
	}

}
exports.route = route;