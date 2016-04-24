var fs = require("fs");
var f = fs.openSync("logs.txt", "a");

process.stdout._write = function(chunk, encoding, callback)
{
   fs.write(f, chunk);
   callback();
};

console.log("Exécution en date du  " + (new Date()));
console.log("Message1");
console.log("Message2");
console.log("Message3");
