var net = require("net");

var server = net.createServer(function(socket)
{
   console.log("Un client vient de se connecter");
   socket.on("error", function()
   {
      console.log("Erreur");
   });
});

server.listen(3000);
