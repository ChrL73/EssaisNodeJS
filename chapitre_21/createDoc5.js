var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/mydb2");

var clientSchema = mongoose.Schema(
{
   nom: String,
   prenom: String,
   adresse: { rue: String, ville: String, cp: String }
});

var Client = mongoose.model("Client", clientSchema);

Client.create({ nom: "Eastwood2", prenom: "Clint2", adresse: { rue: "rue de la mer", ville: "Santa Monica"} }, function()
{
   Client.find(function(err, clients)
   {
      if (err) console.error(err);
      else console.log(clients);
   });
});
