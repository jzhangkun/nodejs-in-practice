#!/usr/bin/env node

var fs = require("fs");

var pathname = "./stream.file";

fs.readFile(pathname, function (err,data) {
    if (err) {
        console.log("error:"+err);
    } else {
        console.log(data);
    }    
});

