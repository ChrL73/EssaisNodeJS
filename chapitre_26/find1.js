db = connect("mydb3");

var clients = db.clients.find();
clients.forEach(function(client)
{
   printjson(client);
});

var commandes = db.commandes.find();
commandes.forEach(function(commande)
{
   printjson(commande);
});
