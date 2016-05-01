var http = require("http");

var server = http.createServer();
server.on("request", function(request, response)
{
   request.on("data", function(chunk)
   {
      console.log("Le serveur a reçu: " + chunk);
   });
   
   var html = "";
   html += "<html><head><meta charset=utf-8></head>";
   html += "<body><p>Bienvenue sur le serveur HTTP de Node !</p></body>";
   html += "</html>";
   response.end(html);
});

server.listen(3000);
