
var async = require("async");

async.waterfall([
    myFirstFunction,
    mySecondFunction,
    myLastFunction,
], function (err, result) {
    // result now equals 'done' 
    console.log("result=" + result);
});
function myFirstFunction(callback) {
    callback(null, 'one', 'two');
}
function mySecondFunction(arg1, arg2, callback) {
    // arg1 now equals 'one' and arg2 now equals 'two' 
    console.log("arg1=" + arg1);
    console.log("arg2=" + arg2);
    callback(null, 'three');
}
function myLastFunction(arg1, callback) {
    // arg1 now equals 'three' 
    console.log("arg3=" + arg1);
    callback(null, 'done');
}
