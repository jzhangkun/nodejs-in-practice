var async = require("async");
var t1 = new Date();
async.parallel([
    function(callback){
        setTimeout(function(){
            callback(null, 'one');
        }, 500);
    },
    function(callback){
        setTimeout(function(){
            callback(null, 'two');
        }, 100);
    }
],
// optional callback 
function(err, results){
    // the results array will equal ['one','two'] even though 
    // the second function had a shorter timeout. 
    var t2 = new Date();
    console.log("time eclapsed=" + (t2 - t1));
    console.log("error=" + err);
    console.log("results=" + results);
});
 
 
var t3 = new Date();
// an example using an object instead of an array 
async.parallel({
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
    // results is now equals to: {one: 1, two: 2} 
    var t4 = new Date();
    console.log("time eclapsed=" + (t4 - t3));
    console.log("error=" + err);
    for (res in results) {
        console.log(res + '=' + results[res]);
    }
});
