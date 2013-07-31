define(function(require, exports, module){
	var cc = require('cocos2d');
	var myApp = cc.Application.extend({
		ctor: function (scene) {
			this._super();

		},
		applicationDidFinishLaunching: function () {
			console.log('finish launching');
			return true;
		}
	});

	//var myApp = new cocos2dApp(MyScene);
	console.log('aaa')
});