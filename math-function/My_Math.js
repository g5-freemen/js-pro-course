// function class My_Math must have following functions at least
/*
    plus
    minus
    divide --   dividing by 0 should not cause an error, just ignore
    multi
    revert --   revert sign +/-
    pow    --   base to the exponent power
    factorial
    ... (you can add your own)
    value  --   returns value and breaks the chain
    format --   it can takes function as a callback,
                which gets result value
                as a first argument,
                and breaks the chain

    chain can get initial value (check usage example in script.js)
*/

;(function (window) {
    function My_Math(initValue) {
        // if (!(this instanceof My_Math)) { //ES5
        if (!new.target) { //ES6
            return new My_Math(initValue);
        }
        this.result = initValue || 0;
    
        this.plus = function (value) {
            this.result+=value;
            return this;
        };
    
        this.minus = function (value) {
            this.result-=value;
            return this;
        }

        this.divide = function (value) {
            if (!value) this.result/=1
            else this.result/=value;
            return this;
        }
    
        this.multi = function (value) {
            this.result*=value;
            return this;
        }
    
        this.revert = function () {
            this.result*=-1;
            return this;
        }
    
        this.pow = function (value) {
            this.result=Math.pow(this.result, value);
            return this;
        }
    
        this.factorial = function () {
            let total = 1;
            if (this.result<0) this.result=-this.result;
            if (this.result.toFixed()!=this.result) this.result=this.result.toFixed();

            if (this.result >= 2) {
                for (let i = 2; i <= this.result; i++) {
                    total *= i;
                }
            }
            this.result = total;
            return this;
        }
    
        this.value = function () { 
            return this.result;
        }
    
        this.format = function (callback) {
            return callback(this.result)
        }
    }
    
    window.My_Math = My_Math;

} )(window);