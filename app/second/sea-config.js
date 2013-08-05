seajs.config({
    base:"/",
    alias:{
		//Engine
		//"cocos2d": "/lib/cocos2d/Cocos2d-html5-v2.1.4.min",
		"cocos2d": "/lib/cocos2d/Cocos2d-debug",
		//app
		"main": "/second/main",
		"s1": "/second/js/myApp",
		
    },
    preload:[
    	"cocos2d"
    ]
	
});