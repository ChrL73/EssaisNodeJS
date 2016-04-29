var dgram = require("dgram");

var client = dgram.createSocket("udp4", function(message, rinfo)
{
   console.log(message.toString());
   process.stdin.resume();
   process.stdin.removeAllListeners("data").on("data", function(chunk)
   {
      var buf = new Buffer(chunk.toString().replace(/[\r|\n]/g, ""));
      client.send(buf, 0, buf.length, rinfo.port, rinfo.address);
   });
});

client.bind(3001, function()
{
   console.log("Le client a démarré sur le port 3001...");
});

process.stdin.resume();
process.stdin.on("data", function(chunk)
{
   var buf = new Buffer(chunk.toString().replace(/[\r|\n]/g, ""));
   client.send(buf, 0, buf.length, 3000, "localhost");
});
