var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response)
{
   var index = fs.createReadStream("index.html");
   index.pipe(response);
});

server.listen(3000);

var io = require("socket.io").listen(server);

//io.sockets.on("connection", function(socket)
io.of("/messages").on("connection", function(socket) // Connexions sur le namespace "/messages"
{
   console.log("Un client s'est connecté");
   var nom, prenom;
   
   socket.on("event1", function(data)
   {
      console.log(data.prenom + " " + data.nom + " s'est connecté");
      nom = data.nom;
      prenom = data.prenom;
   });
   
   socket.on("disconnect", function()
   {
      console.log(prenom + " " + nom + " s'est déconnecté");
   });
   
   socket.emit("event2", "Message envoyé du serveur vers le client");
});
