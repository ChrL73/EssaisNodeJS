var dgram = require("dgram");

var server = dgram.createSocket("udp4", function(message, rinfo)
{
   console.log(message.toString());
   process.stdin.resume();
   process.stdin.removeAllListeners("data").on("data", function(chunk)
   {
      var buf = new Buffer(chunk.toString().replace(/[\r|\n]/g, ""));
      server.send(buf, 0, buf.length, rinfo.port, rinfo.address);
   });
});

server.bind(3000, function()
{
   console.log("Le serveur a démarré sur le port 3000...");
});
