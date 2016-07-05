var extend = require("underscore").extend;
var myMixins = {
    moveUp: function(){ console.log("move up") },
    moveDown: function(){ console.log("move down") },
    stop: function(){ console.log("stop! in the name of love!") }
};

function CarAnimator() {
    this.moveLeft = function(){
        console.log("move left");
    };
}

function PersonAnimator() {
    this.moveRandomly = function(){
        console.log("moving");
    };
}

extend( CarAnimator.prototype, myMixins );
extend( PersonAnimator.prototype, myMixins );

var animator = new CarAnimator();
animator.moveLeft();
animator.stop();
animator.moveDown();

animator = new PersonAnimator();
animator.moveRandomly();
animator.stop();
