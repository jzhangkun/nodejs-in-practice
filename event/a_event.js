var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

console.log('subscribe for the event[name]...');
emitter.on('name', function(first, last){
    console.log(first + ', ' + last);
});

console.log('emit as follows...');
emitter.emit('name', 'tj', 'holowaychuk');
emitter.emit('name', 'simon', 'holowaychuk');
