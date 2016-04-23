var stream = require("stream");
var readable = new stream.Readable();

readable._read = function(size)
{
   console.log("Méthode _read appelée, size=" + size);
};

readable.on("data", function(chunk)
{
   console.log(chunk);
});

readable.push("Bonjour1 !");
readable.push("Bonjour1 !");

