var db = connect("mydb");

// deprecated
var nb = db.clients.copyTo("client_save");

var clients = db.client_save.find().sort({ nom: 1 });
clients.forEach(function(client)
{
   printjson(client);
});

print(nb + " documents copiés");