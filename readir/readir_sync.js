#!/usr/bin/env node

var fs = require("fs");
var path = require("path");

function travel(dir, callback) {
    fs.readdirSync(dir).forEach(function (file) {
        var pathname = path.join(dir, file);

        if (fs.statSync(pathname).isDirectory()) {
            travel(pathname, callback);
        } else {
            callback(pathname);
        }
    });
}

travel("/Users/zhouxiang/Code/", function (pathname) {
    console.log(pathname);
});
