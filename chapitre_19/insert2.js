db = connect("mydb");

var client1 = 
{
   nom: "",
   prenom: "Christophe (nom vide)"  
};
db.clients.insert(client1);

var client2 =
{
   nom: null,
   prenom: "Christophe (nom null)"  
};
db.clients.insert(client2);

var client3 =
{
   nom: undefined,
   prenom: "Christophe (nom undefined)"  
};
db.clients.insert(client3);

var client4 =
{
   prenom: "Christophe (nom non indiqué)"  
};
db.clients.insert(client4);

var dbs = db.adminCommand("listDatabases");
printjson(dbs);