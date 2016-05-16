var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/mydb2");

var clientSchema = mongoose.Schema(
{
   nom: String,
   prenom: String,
   adresse: { rue: String, ville: String, cp: String },
   age: Number
});

var Client = mongoose.model("Client", clientSchema);

// Le 2e paramètre de la fonction de callback n'est plus le nombre de documents mis à jour comme dans le livre,
// mais un objet contenant 3 champs: 'ok', 'nModified' et 'n'
Client.update({ nom: /Obama/ }, { age: 54 }, { multi: true }, function(err, result)
{
   console.log(result);
   console.log("Nombre de documents mis à jour : " + result.n);
   Client.find({ nom: /Obama/ }, function(err, clients)
   {
      console.log(clients);
   });
});
