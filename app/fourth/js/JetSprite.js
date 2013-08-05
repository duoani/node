define(function( require, exports, module ){
	var cc = require("cocos2d");
	var JetSprite = cc.Sprite.extend({
		_currRotation: 0,
		_x: 0,
		_y: 0,
		ctor: function(){
			this._super();
			this.initWithFile("res/img/jet.png");
			var s = cc.Director.getInstance().getWinSize();
			this._x = s.width / 2;
			this._y = s.height / 2;
		},
		update: function(){
			this.setPosition(this._x, this._y);
			this.setRotation(this._currRotation);
		},
		handleKey:function(e){
			console.log(e)
			if(e === cc.KEY.left){
				this._x -= 5;

			}else if(e === cc.KEY.right){
				this._x += 5;

			}else if( e === cc.KEY.up ){
				this._y += 5;

			}else if( e === cc.KEY.down ){
				this._y -= 5;
			}

	        this._currRotation = (this._currRotation + 361) % 361;
	    },
	    handleTouch:function(touchLocation){
			if(touchLocation.x < 300){
				this._currRotation = 0;

			}else{
				this._currRotation = 180;
			}
		},
		handleTouchMove:function(touchLocation){
			// Gross use of hardcoded width,height params.
			var angle = Math.atan2(touchLocation.x-300,touchLocation.y-300);

			angle = angle * (180/Math.PI);
			this._currRotation = angle;

			}
	});

	module.exports = JetSprite;
});36