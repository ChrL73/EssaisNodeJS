var dgram = require("dgram");

var server = dgram.createSocket("udp4");

server.on("message", function(message, rinfo)
{
   console.log("Message reçu : " + message);
   var buf = new Buffer("Merci, bien reçu");
   server.send(buf, 0, buf.length, rinfo.port, rinfo.address);
});

server.bind(3000, function()
{
   console.log("Le serveur a démarré...");
});

