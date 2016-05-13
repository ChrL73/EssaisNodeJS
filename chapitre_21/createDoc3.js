var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/mydb2");

var clientSchema = mongoose.Schema({ nom: String, prenom: String, adresse: String });
var Client = mongoose.model("Client", clientSchema);

Client.create({ nom: "Obama3", prenom: "Barack3", adresse: "Washington" }, function()
{
   Client.find(function(err, clients)
   {
      if (err) console.error(err);
      else console.log(clients);
   });
});
