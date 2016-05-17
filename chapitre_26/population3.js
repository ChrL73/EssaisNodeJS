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

/*Commande.find(function(err, commandes)
{
   Commande.populate(commandes, { path: "effectuePar", select: "nom" }, function(err, cdes)
   {
      console.log("\nListe des commandes :\n" + cdes);
   });
});*/

Commande.findOne(function(err, commande)
{
   commande.populate("effectuePar", "nom" , function(err, cde)
   {
      console.log("\nCommande :\n" + cde);
   });
});
