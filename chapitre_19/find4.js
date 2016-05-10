db = connect("mydb");

// Clients ayant une adresse à Paris (que l'adresse soit ou non dans un tableau)
//var clients = db.clients.find({ "adresse.ville": "Paris" });

// Récupère uniquement les clients ayant un tableau d'adresses et dont la première adresse est à Paris
//var clients = db.clients.find({ "adresse.0.ville": "Paris" }); 

//var clients = db.clients.find().sort({ nom: 1});
//var clients = db.clients.find().sort({ prenom: 1, nom: -1});

//var clients = db.clients.find(null, { nom: 1 });
var clients = db.clients.find(null, { _id: 0, nom: 1 });

print("Nombre de documents dans la collection : " + clients.count());

/*var client = db.clients.findOne({ "adresse.ville": "Paris" });
printjson(client);*/

clients.forEach(function(client)
{
   printjson(client);
});