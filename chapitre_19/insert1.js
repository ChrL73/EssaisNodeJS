db = connect("mydb");

var client1 = 
{
   nom: "Lefebvre",
   prenom: "Christophe"  
};

db.clients.insert(client1);

var client2 =
{
   nom: "Blup",
   prenom: "Bob"
};

db.clients.insert(client2);

var dbs = db.adminCommand("listDatabases");
printjson(dbs);