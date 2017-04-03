#!/usr/bin/env node
var fs = require("fs");
var pathname = "./stream.file";

try {
    var rs = fs.createReadStream(pathname);
}
catch (err) {
    console.log(err);
}
//console.log(rs);

var content = [];
rs.on('data', function (chunk) {
    //doSomething(chunk);
    console.log(chunk);
    content.push(chunk.toString);
});

rs.on('end', function () {
    rs.close();
});

console.log(content);

