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

var client = new Client({ nom: "Obama", prenom: "Barack" });
client.save(function()
{
   var cde = new Commande({ date: new Date(), effectuePar: client._id });
   cde.save(function()
   {
      client.commandes.push(cde);
      client.save();
      console.log(client + " sauvegardé");
   });
   console.log("\n" + cde + " sauvegardée");
});
