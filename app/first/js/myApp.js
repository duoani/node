define(function(require, exports, module){
    var myLayer = cc.Layer.extend({
        init: function(){
            this._super();
            var s = cc.Director.getInstance().getWinSize();
            console.log(s);
            var layer1 = cc.LayerColor.create(new cc.Color4B(100, 100, 100, 255), ccConfig.winWidth, ccConfig.winHeight);
            console.log('ap:', layer1.getAnchorPoint())
            layer1.setPosition( new cc.p(0, 0) )

            var helloLabel = cc.LabelTTF.create("Oh shit!", "Arial", 30);
            helloLabel.setPosition( new cc.p(s.width/2, s.height/2) )
            helloLabel.setColor( new cc.Color3B(255,0,0) );  
            var rotationAmount = 0;
            var scale = 1;
            var step = 0.05
            helloLabel.schedule(function(){
                this.setRotation( rotationAmount++ );
                if( scale > 10 ){
                    step = -0.05
                }else if(scale < 1){
                    step = 0.05
                }
                scale += step;
                this.setScale( scale );
                rotationAmount %=  360;

            });


            layer1.addChild(helloLabel);
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
