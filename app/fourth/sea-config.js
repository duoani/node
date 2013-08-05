seajs.config({
    base:"/",
    alias:{
		//Engine
		//"cocos2d": "/lib/cocos2d/Cocos2d-html5-v2.1.4.min",
		"cocos2d": "/lib/cocos2d/Cocos2d-debug",
		//app
		"main": "/fourth/main",
		"s1": "/fourth/js/myApp",
		"jet": "/fourth/js/JetSprite",
		"resource": "/fourth/js/resource"
		
    },
 
    preload:[
    	"cocos2d"
    ]
	
});