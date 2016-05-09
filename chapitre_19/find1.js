db = connect("mydb");

var clients = db.clients.find();
//var clients = db.clients.find({ nom: "Lefebvre" });
//var clients = db.clients.find({ nom: "Lefebvre", prenom: "Christophe" });
//var clients = db.clients.find({ $and: [ {nom: "Lefebvre"}, {prenom: "Christophe"} ] }); // Même résultat que la ligne précédente
//var clients = db.clients.find({ nom: { $gt: "J", $lt: "S"} });
//var clients = db.clients.find({ nom: {$in: ["Lefebvre", "Blup"] } });
//var clients = db.clients.find({ $or: [{nom: "Lefebvre"}, {prenom: "Bob"}] });
//var clients = db.clients.find( { nom: "Lefebvre", $or: [ {prenom: "Christophe"}, {prenom: "Bob"} ]} );

clients.forEach(function(client)
{
   printjson(client);
});