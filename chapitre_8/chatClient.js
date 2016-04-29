var net = require("net");

(function connect()
{
   var client = net.connect(3000);
   client.setEncoding("utf-8");

   process.stdin.resume();
   process.stdin.pipe(client);
   client.pipe(process.stdout);

   client.on("error", function()
   {
      console.log("Perte de connexion au serveur...");
      connect();
   });

   client.on("end", function()
   {
      process.stdin.pause();
   });
})();

