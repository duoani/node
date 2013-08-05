define(function(require, exports, module){
    var myLayer = cc.Layer.extend({
        init: function(){
            this._super();
            var s = cc.Director.getInstance().getWinSize();
            var layer1 = cc.LayerColor.create(new cc.Color4B(100, 100, 100, 255), ccConfig.winWidth, ccConfig.winHeight);
            var jetSprite = cc.Sprite.create("/second/res/img/jet.png");
            
            layer1.setPosition( cc.p(0, 0) )
            layer1.addChild(jetSprite);

            jetSprite.setPosition(cc.p(s.width / 2, s.height / 2));
            console.log(jetSprite.getContentSize())
            var r = 0;
            jetSprite.schedule(function(){
                this.setRotation(r++);
                r %= 360;


            });
            this.addChild(layer1);
            return true;
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
