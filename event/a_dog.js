var EventEmitter = require('events').EventEmitter;
var extend = require('../util/extend.js');

function Dog(name) {
    this.name = name;
    EventEmitter.call(this);
}

extend(Dog, EventEmitter);
// OR
//Dog.prototype.__proto__ = EventEmitter.prototype;

var simon = new Dog('Simon');

// debug
//console.log(simon);
//process.exit(0);

function barkme(arg1, arg2) {
    console.log(this.name + ' barked');
    console.log(arg1 + ' ' + arg2);
};

simon.on('bark', barkme);


setInterval(function() {
    simon.emit('bark', 'hello', 'world');
}, 500);

setTimeout(function(){
    simon.removeListener('bark', barkme);
}, 2000);
