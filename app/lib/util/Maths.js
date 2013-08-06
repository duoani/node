define(function( require, exports, module ){
	/**
	 * 求区间内的随机数
	 * @param {Number} num1
	 * @param {Number}[optional] num2
	 * rand(1, 3) => (1,3)
	 * rand(-2,2) => (-2,2)
	 * rand(5, 1) => (1,5)
	 * rand(5)	  => (0,5)
	 */
	function rand(num1, num2){
		num1 = num1 || 0;
		num2 = num2 || 0;
		return (num2 - num1)*Math.random() + num1;
	}
	exports.rand = rand;
	
	/**
	 * 求区间内的随机整数
	 * @param {Number} num1
	 * @param {Number}[optional] num2
	 * randInt(1, 3) => [1,3]
	 * randInt(-3,3) => [-3,3]
	 * randInt(3, 1) => [1,3]
	 * randInt(5)	 => [0,5]
	 */
	function randInt(num1, num2){
		return Math.round(rand(num1, num2));
	}
	exports.randInt = randInt;

    /**
     * 校正区间, 使给定点落入区间[min, max]
     * @param num {Number} 输入数
     * @param min {Number} 左区间
     * @param max {Number} 右区间
     * @returns {Number}
     * among(1, 0, 3) => 1
     * among(4, 0, 3) => 3
     * among(-1, 0, 3)=> 0
     */
    function among(num, min, max){
        if( min > max ){
            var t = min;
            min = max;
            max = t;
        }
        return Math.min(Math.max(num, min), max)
    }
    exports.among = among;
});
