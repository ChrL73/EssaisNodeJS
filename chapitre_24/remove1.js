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

/*Client.remove({ nom: /Obama/ }, function(err, result)
{
   console.log(result.result.n);
   Client.find(null, function(err, clients)
   {
      console.log(clients);
   });
});*/

Client.findOne({ prenom: "Clint"}, function(err, client)
{
   if (!client) return;
   client.remove(function(err, c)
   {
      if (c) console.log(c + " supprimé");
   });
});
