var net = require("net");

var server = net.createServer(function(socket)
{
   console.log("Un client vient de se connecter");

   var timer = setInterval(function()
   {
      socket.write((new Date()).toString());
   }, 2000);

   socket.on("error", function()
   {
      console.log("error");
      clearInterval(timer);
   });
});

server.on("listening", function()
{
   console.log("Le serveur est démarré");
});

server.listen(3000);

