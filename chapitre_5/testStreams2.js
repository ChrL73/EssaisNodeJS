var fs = require("fs");
var stream = require("stream");

var readable = new stream.Readable();
readable.setEncoding("utf-8");

var content = fs.readFileSync("stream.txt");

readable._read = function(size)
{
   console.log("Méthode _read() appelée");
   if (content) readable.push(content);
   content = "";
};

readable.on("data", function(chunk)
{
   console.log(chunk);
});
