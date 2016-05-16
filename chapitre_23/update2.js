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

Client.update({ nom: /Obama/ }, { $unset: { age: 0 } }, { multi: true }, function(err, result)
{
   console.log(result);
   console.log("Nombre de documents mis à jour : " + result.n);
   Client.find({ nom: /Obama/ }, function(err, clients)
   {
      console.log(clients);
   });
});
