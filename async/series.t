var async = require("async");

async.series([
    function(callback){
        // do some stuff ... 
        
        callback(null, 'one');
        //callback("my bad");
    },
    function(callback){
        // do some more stuff ... 
        callback(null, 'two');
    }
],
// optional callback 
function(err, results){
    // results is now equal to ['one', 'two'] 
    console.log("error=" + err);
    console.log("result=" + results);
});


/*
// an example using an object instead of an array 
async.series({
    one: function(callback){
        setTimeout(function(){
            callback(null, 1);
        }, 200);
    },
    two: function(callback){
        setTimeout(function(){
            callback(null, 2);
        }, 100);
    }
},
function(err, results) {
    // results is now equal to: {one: 1, two: 2} 
});
*/


async.series({
    one: function(callback) {
        setTimeout(function() {
            callback(null,  1);
        }, 200);
    },
    two: function(callback) {
        setTimeout(function() {
            callback(null, 2);
        }, 100);
    }
},
function(err,results) {
    console.log("error=" + err);
    //console.log("result=" + results.toString);
    for (res in results) {
        console.log(res + results[res]);
    }
});
