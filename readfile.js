#!/usr/bin/env node
var fs = require("fs");
fs.readFile('./tmp/file1', function(err,data){
    if(!err) {
       console.log(data.toString());
    }
});
console.log("something else");
