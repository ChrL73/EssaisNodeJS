var net = require("net");

var sockets = [];
var server = net.createServer(function(socket)
{
   sockets.push(socket);
   console.log("Il y a " + sockets.length + " clients connectés");

   socket.on("data", function(chunk)
   {
      if (chunk.toString().replace(/\r|\n/g, "") == "exit")
      {
         socket.end();
      }
      else
      {
         sockets.forEach(function(s)
         {
            if (s != socket) s.write(chunk);
         });
      }
   });

   socket.on("error", function()
   {
      socket.emit("end");
   });

   socket.on("end", function()
   {
      sockets.splice(sockets.indexOf(socket), 1);
      console.log("Il reste " + sockets.length + " clients connectés");
   });
});

server.on("listening", function()
{
   console.log("Le serveur est démarré...");
});

server.listen(3000);

