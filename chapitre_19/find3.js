db = connect("mydb");

// "adresse.ville" doit être entre guillements
//var clients = db.clients.find({ "adresse.ville": "Paris" }); 
var clients = db.clients.find({ "adresse.ville": "Paris", nom: "Dupont" }); 

clients.forEach(function(client)
{
   printjson(client);
});