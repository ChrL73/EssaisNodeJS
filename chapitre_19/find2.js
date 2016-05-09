db = connect("mydb");

//var clients = db.clients.find( { nom: { $exists: true } } );
//var clients = db.clients.find( { nom: null } );
//var clients = db.clients.find( { nom: { $type: 2 } } );
//var clients = db.clients.find({ $or: [ { nom: { $type: 2 } }, { nom: { $type: 10} } ] });

var clients = db.clients.find(
{
   nom: { $type: 2 }, // Sans cette ligne, on obtient une erreur lorsque 'this.nom' n'est pas une chaine de caractères
   $where: "this.nom.match(/^lefebvre|blup/i)"
});

clients.forEach(function(client)
{
   printjson(client);
});