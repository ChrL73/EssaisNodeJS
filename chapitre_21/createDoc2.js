var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/mydb2");

var clientSchema = mongoose.Schema({ nom: String, prenom: String, adresse: String });
var Client = mongoose.model("Client", clientSchema);

var c = new Client({ nom: "Obama2", prenom: "Barack2" });
c.adresse = "Washington";

c.save(function()
{
   Client.find(function(err, clients)
   {
      if (err) console.error(err);
      else console.log(clients);
   });
});
