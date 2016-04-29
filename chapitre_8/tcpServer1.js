var net = require("net");

var server = net.createServer();

server.on("connection", function(socket)
{
   console.log("Un client vient de se connecter");
   socket.write("Connexion au serveur réussie");
});

server.on("listening", function()
{
   console.log("Le serveur a démarré");
});

var server_closed = false;
setInterval(function()
{
   server.getConnections(function(err, count)
   {
      console.log(count + " client(s) connecté(s)");
      if (count >= 2)
      {
         if (!server_closed)
         {
            server_closed = true;
            server.close(function()
            {
               console.log("Le serveur est arrêté...");
            });
         }
      }
   });
}, 5000);


server.listen(3000);
