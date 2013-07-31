seajs.config({
    base:"/",
    alias:{
		//Engine
		"cocos2d": "/lib/cocos2d/Cocos2d-html5-v2.1.4.min",
		//app
		"main": "/first/main"
		
    },
    preload:[
    	"cocos2d"
    ]
	
});