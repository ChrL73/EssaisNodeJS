var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer(function(request, response)
{
   console.log(request.url);
   var filename = url.parse(request.url).pathname;
   if (filename == "/favicon.ico") return;
   if (filename == "/") filename = "/index.html";
   filename = "." + filename;
   
   fs.exists(filename, function(exists)
   {
      if (!exists)
      {
         filename = "404.html";
         response.writeHead(404, {"Content-Type": "text/html"});
      }
      else
      {
         response.writeHead(200, {"Content-Type": "text/html"});
      }
      var index = fs.createReadStream(filename);
      index.pipe(response);
   });
});

server.listen(3000);
