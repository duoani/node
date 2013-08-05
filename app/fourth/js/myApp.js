define(function(require, exports, module){
    var myLayer = cc.Layer.extend({
        _jet: null,
        v: 1,
        init: function(){
            this._super();
            var s = cc.Director.getInstance().getWinSize();

            //cc.AudioEngine.getInstance().setMusicVolume(0.1);
            cc.MenuItemFont.setFontSize(18);
            cc.MenuItemFont.setFontName("Arial");

            var item1 = cc.MenuItemFont.create('play music', this.playMusic, this);
            var item2 = cc.MenuItemFont.create('pause music', this.pauseMusic, this);
            var item3 = cc.MenuItemFont.create('resume background', this.resumeMusic, this);
            var item4 = cc.MenuItemFont.create('valume down', this.valumeDown, this);

            item1.setColor(new cc.Color3B(123,1,123))
            item2.setColor(new cc.Color3B(123,1,123))
            item3.setColor(new cc.Color3B(123,1,123))
            item4.setColor(new cc.Color3B(123,1,123))
            item1.setPosition(cc.p(s.width/2, s.height/2+50));
            item2.setPosition(cc.p(s.width/2, s.height/2));
            item3.setPosition(cc.p(s.width/2, s.height/2-50));
            item4.setPosition(cc.p(s.width/2, s.height/2-100));

            var menu = cc.Menu.create(item1, item2, item3, item4);

            menu.setPosition(cc.p(0, 0))
            this.addChild(menu);
            return true;
        },

        playEffect: function(){
            console.log('effect:', this instanceof cc.Layer);
            cc.AudioEngine.getInstance().playEffect("res/music/effect.mp3");
        },

        playMusic: function(){
            console.log('background:', this instanceof cc.Layer)
            cc.AudioEngine.getInstance().playMusic("res/music/background.mp3");
        },

        pauseMusic: function(){
            cc.AudioEngine.getInstance().pauseMusic()
        },

        resumeMusic: function(){
            cc.AudioEngine.getInstance().resumeMusic();
        },
        rewindMusic: function(){
            cc.AudioEngine.getInstance().rewindMusic();
        },
        valumeDown: function(){
            this.v -= 0.1;
            cc.AudioEngine.getInstance().setMusicVolume(this.v);
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
