var net = require("net");

function connect()
{
   var client = net.connect(3000);
   client.setEncoding("utf-8");

   client.on("data", function(chunk)
   {
      console.log(chunk);
   });

   client.on("error", function()
   {
      console.log("Error on client");
      connect();
   });
}

connect();
