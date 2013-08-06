seajs.config({
    base:"/",
    alias:{
		//Engine
		//"cocos2d": "/lib/cocos2d/Cocos2d-html5-v2.1.4.min",
		"cocos2d": "/lib/cocos2d/Cocos2d-debug",
		//app
        "gameConfig": "/third/js/gameConfig",
		"main": "/third/main",
		"s1": "/third/js/myApp",
		"jet": "/third/js/JetSprite"
		
    },
 
    preload:[
    	"cocos2d"
    ]
	
});