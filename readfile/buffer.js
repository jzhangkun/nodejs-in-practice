#!/usr/bin/env node

var bin = new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);

console.log(bin.toString());
var sub = bin.slice(2);
sub[0] = 0x65;

console.log(bin.toString());

