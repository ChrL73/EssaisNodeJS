var db = connect("mydb");

/*var clients = db.clients.find( { nom: {$exists: false} } );

if (clients.count())
{
   clients[0].nom = "Lef";
   db.clients.save(clients[0]);
}*/

var clients = db.clients.find({ nom: "Lef" });
if (clients.count())
{
   delete clients[0].nom;
   db.clients.save(clients[0]);
}

clients = db.clients.find();
clients.forEach(function(client)
{
   printjson(client);
});
