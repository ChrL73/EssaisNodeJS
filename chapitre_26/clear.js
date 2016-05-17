var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/mydb3");

var clientSchema = mongoose.Schema(
{
   nom: String,
   prenom: String,
   age: Number,
   commandes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Commande" }]
});

var commandeSchema = mongoose.Schema(
{
   date: Date,
   effectuePar: { type: mongoose.Schema.Types.ObjectId, ref: "Client" }
});

var Client = mongoose.model("Client", clientSchema);
var Commande = mongoose.model("Commande", commandeSchema);

Client.remove(null, function(err, result)
{
   console.log(result.result.n);
   Client.find(null, function(err, clients)
   {
      console.log(clients);
   });
});

Commande.remove(null, function(err, result)
{
   console.log(result.result.n);
   Commande.find(null, function(err, commandes)
   {
      console.log(commandes);
   });
});
