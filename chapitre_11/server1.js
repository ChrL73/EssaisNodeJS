var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response)
{
   var index = fs.createReadStream("index.html");
   index.pipe(response);
});

server.listen(3000);

var io = require("socket.io").listen(server);

io.sockets.on("connection", function(socket)
{
   console.log("Un client s'est connecté");
   socket.on("event1", function(data)
   {
      console.log(data);
   });
});
