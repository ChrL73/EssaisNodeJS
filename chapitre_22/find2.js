var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/mydb2");

var clientSchema = mongoose.Schema(
{
   nom: String,
   prenom: String,
   adresse: { rue: String, ville: String, cp: String }
});

var Client = mongoose.model("Client", clientSchema);

/*Client.find().where("nom").gt("N").sort("nom").exec(function(err, clients)
{
   if (err) console.error(err);
   else console.log(clients);
});*/

/*Client.findOne().where("nom").gt("N").sort("nom").exec(function(err, client)
{
   if (err) console.error(err);
   else console.log(client);
});*/

/*Client.count({ nom: /Obama/ }, function(err, count)
{
   console.log("Nombre de clients dont le nom contient 'Obama' : " + count);
});*/

/*Client.find({ nom: /Obama/ }).count(function(err, count)
{
   console.log("Nombre de clients dont le nom contient 'Obama' : " + count);
});*/

Client.find().where("nom").regex(/Obama/).count(function(err, count)
{
   console.log("Nombre de clients dont le nom contient 'Obama' : " + count);
});
