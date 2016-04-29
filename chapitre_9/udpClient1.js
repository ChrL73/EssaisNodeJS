var dgram = require("dgram")

var client = dgram.createSocket("udp4");
var msg = new Buffer("Bonjour !");
client.send(msg, 0, msg.length, 3000, "localhost");

client.on("message", function(message)
{
   console.log(message.toString());
});