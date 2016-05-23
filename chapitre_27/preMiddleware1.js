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
   next(); // Si on'appelle pas next(), le middleware 'save' n'est pas appelé et le document n'est pas sauvegardé
});

clientSchema.pre("save", function(next)
{
   console.log("Avant la sauvegarde du document");
   next(); // Si on'appelle pas next(), le document n'est pas sauvegardé
});

var Client = mongoose.model("Client", clientSchema);

//var c = new Client({ nom: "Lefebvre", prenom: "Christophe" });
var c = new Client({ nom: "Martin", prenom: "Michel" });
c.save(function(err, client)
{
   if (client) console.log(client + " sauvegardé");
});
