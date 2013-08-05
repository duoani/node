define(function(require, exports, module){
    var Jet = require("jet");
    var myLayer = cc.Layer.extend({
        _jet: null,
        init: function(){
            this._super();
            var s = cc.Director.getInstance().getWinSize();
            var layer1 = cc.LayerColor.create(new cc.Color4B(100, 100, 100, 255), ccConfig.winWidth, ccConfig.winHeight);
            
            this.setTouchEnabled(true);
            this.setKeyboardEnabled(true);
            this._jet = new Jet();
            this._jet.scheduleUpdate();
            layer1.setPosition( cc.p(0, 0) )
            layer1.addChild(this._jet);

            this.addChild(layer1);
            return true;
        },
        onEnter:function(){
            this._super();
        },
        onTouchesEnded:function (pTouch,pEvent){
            this._jet.handleTouch(pTouch[0].getLocation());
        },
        onTouchesMoved:function(pTouch,pEvent){
            this._jet.handleTouchMove(pTouch[0].getLocation());
        },
        onKeyUp:function(e){

        },
        onKeyDown:function(e){
            this._jet.handleKey(e);
        }
    });

    var MyFirstAppScene = cc.Scene.extend({
        onEnter: function(){
            console.log('enter')
            this._super();
            var layer = new myLayer();
            layer.init();
            this.addChild(layer);
        }
    });
    exports.FirstScene = MyFirstAppScene;
});
