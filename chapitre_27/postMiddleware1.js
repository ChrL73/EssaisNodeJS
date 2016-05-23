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
   next(); 
});

clientSchema.post("validate", function()
{
   console.log("Après la validation du document");
});

clientSchema.post("save", function()
{
   console.log("Après la sauvegarde du document");
});

clientSchema.post("remove", function()
{
   console.log("Après la suppression du document");
});

var Client = mongoose.model("Client", clientSchema);

var c = new Client({ nom: "Blup", prenom: "Blop" });
c.save(function(err, client)
{
   if (client) console.log(client + " sauvegardé");
   Client.findOne({ nom: "Blup", prenom: "Blop" }, function(err, client)
   {
      if (client)
      {
         client.remove(function(err, c)
         {
            console.log(client + " supprimé");
         });     
      }
   });
});
