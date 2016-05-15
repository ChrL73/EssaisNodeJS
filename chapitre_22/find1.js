var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/mydb2");

var clientSchema = mongoose.Schema(
{
   nom: String,
   prenom: String,
   adresse: { rue: String, ville: String, cp: String }
});

var Client = mongoose.model("Client", clientSchema);

Client.find({ "adresse.ville": "Santa Monica" }, function(err, clients)
{
   if (err) console.error(err);
   else console.log(clients);
});
