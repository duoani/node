(function () {
    var c = {
        COCOS2D_DEBUG:2, //0 to turn debug off, 1 for basic debug, and 2 for full debug
        box2d:false,
        chipmunk:false,
        showFPS:true,
        frameRate:60,
        loadExtension:false,
        renderMode:1,       //Choose of RenderMode: 0(default), 1(Canvas only), 2(WebGL only)
        winWidth: 800,
        winHeight: 450,
        tag:'gameCanvas', //the dom element to run cocos2d on
        SingleEngineFile:'./js/Cocos2d-html5-v2.1.4.min.js',
        //engineDir:'../cocos2d/',
        appFiles:[
        ]
    };

    document.ccConfig = window.ccConfig = c;
})();