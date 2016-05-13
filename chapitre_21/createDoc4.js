var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/mydb2");

var adresseSchema = mongoose.Schema({ rue: String, ville: String, cp: String });
var clientSchema = mongoose.Schema({ nom: String, prenom: String, adresse: [adresseSchema] });

var Client = mongoose.model("Client", clientSchema);

Client.create({ nom: "Eastwood", prenom: "Clint", adresse: [{ rue: "rue de la mer", ville: "Santa Monica"}] }, function()
{
   Client.find(function(err, clients)
   {
      if (err) console.error(err);
      else console.log(clients);
   });
});
