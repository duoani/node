define(function(require, exports, module){
	var cc = require('cocos2d');
	var s1 = require("s1");
	var resource = require("resource");

	var MyApp = cc.Application.extend({
		ctor: function (scene) {
			this._super();
			this.startScene = scene;
			cc.COCOS2D_DEBUG = ccConfig.COCOS2D_DEBUG;
			cc.setup(ccConfig.tag);
			cc.initDebugSetting();
        	cc.AppController.shareAppController().didFinishLaunchingWithOptions();

        	cc.AudioEngine.getInstance().init("mp3,ogg,wav");

		},
		applicationDidFinishLaunching: function () {
			var me = this;
			console.log('finish launching');
			var director = cc.Director.getInstance();
	        director.setDisplayStats(ccConfig.showFPS);
	        director.setAnimationInterval(1.0 / ccConfig.frameRate);
	        director.runWithScene(new this.startScene());

	        // cc.LoaderScene.preload(resource.music, function(){
	        // 	director.replaceScene(new me.startScene())
	        // });
			return true;
		}
	});

	var myApp = new MyApp(s1.FirstScene);
});