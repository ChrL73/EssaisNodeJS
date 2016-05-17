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

Client.find().populate("commandes").exec(function(err, clients)
{
   console.log("Liste des clients :\n" + clients);
});

Commande.find().populate("effectuePar", "nom prenom").exec(function(err, commandes)
{
   console.log("Liste des commandes :\n" + commandes);
});
