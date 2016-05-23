var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/mydb3");

var clientSchema = mongoose.Schema(
{
   nom: String,
   prenom: String,
   age: Number
});

clientSchema.pre("validate", function(next)
{
   console.log("Avant la validation du document");
   next(); 
});

clientSchema.pre("save", function(next)
{
   console.log("Avant la sauvegarde du document");
   next(); 
});

clientSchema.pre("remove", function(next)
{
   console.log("Avant la suppression du document");
   if (this.nom == "Obama") console.log("On ne peut pas supprimer le client " + this.nom);
   else next(); 
});

var Client = mongoose.model("Client", clientSchema);

//Client.findOne({ nom: "Lefebvre", prenom: "Christophe" }, function(err, client)
Client.findOne({ nom: "Obama", prenom: "Barack" }, function(err, client)
{
   if (client)
   {
      client.remove(function(err, c)
      {
         console.log(client + " supprimé");
      });     
   }
});
