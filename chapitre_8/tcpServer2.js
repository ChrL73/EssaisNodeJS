var net = require("net");

var server1 = net.createServer();
server1.on("listening", function()
{
   console.log("Le serveur a démarré");
});
server1.on("error", function()
{
   console.log("Le serveur 1 a produit une erreur");
});
server1.listen(3000);

var server2 = net.createServer();
server2.on("listening", function()
{
   console.log("Le serveur a démarré");
});
server2.on("error", function()
{
   console.log("Le serveur 2 a produit une erreur");
});
server2.listen(3000);
