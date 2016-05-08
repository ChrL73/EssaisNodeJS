db = connect("mydb");

var clients = db.clients.find({nom: "Lefebvre"});

clients.forEach(function(client)
{
   printjson(client);
});