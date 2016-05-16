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

Client.findOne({ nom: "Obama" }, function(err, c)
{
   if (err || !c) return;
   c.nom = "Obama1";
   c.prenom = "Barack1";
   c.save(function(err, client)
   {
      console.log(client + " modifié !");
      Client.find({nom: /Obama/ }, function(err, clients)
      {
         console.log(clients);
      });
   });
});
