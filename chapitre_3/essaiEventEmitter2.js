var events = require("events");
var util = require("util");

function Server(port)
{
   this.port = port;
   console.log("Création d'un serveur sur le port " + port);
}

util.inherits(Server, events.EventEmitter);

var server1 = new Server(3000);
var server2 = new Server(3001);

[server1, server2].forEach(function(server)
{
   server.addListener("connexion", function()
   {
      console.log("une connexion a été effectuée sur le port " + this.port);
   })
});

server1.emit("connexion");
server2.emit("connexion");
