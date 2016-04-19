var http = require("http")

var server = http.createServer(function(request, response)
{
   response.setHeader("Content-Type", "text/html");
   response.write("<h3>Bonjour !</h3>");
   response.end();
});

server.listen(3000);
