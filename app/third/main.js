define(function(require, exports, module){
	var cc = require('cocos2d');
	var s1 = require("s1");
	var MyApp = cc.Application.extend({
		ctor: function (scene) {
			this._super();
			this.startScene = scene;
			cc.COCOS2D_DEBUG = ccConfig.COCOS2D_DEBUG;
			cc.setup(ccConfig.tag);
			cc.initDebugSetting();
        	cc.AppController.shareAppController().didFinishLaunchingWithOptions();

		},
		applicationDidFinishLaunching: function () {
			console.log('finish launching');
			var director = cc.Director.getInstance();
	        director.setDisplayStats(ccConfig.showFPS);
	        director.setAnimationInterval(1.0 / ccConfig.frameRate);
	        director.runWithScene(new this.startScene());
			return true;
		}
	});

	var myApp = new MyApp(s1.FirstScene);
});