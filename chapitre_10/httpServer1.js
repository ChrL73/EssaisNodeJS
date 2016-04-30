var http = require("http");
var util = require("util");

var server = http.createServer(function(request, response)
{
   console.log(request.url);
   var html = util.inspect(request.headers, { depth: 0});
   if (request.url == "/") response.end(html);
});

server.listen(3000);
