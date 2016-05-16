db = connect("mydb2");

var clients = db.clients.find();

clients.forEach(function(client)
{
   printjson(client);
});