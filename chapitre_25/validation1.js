var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/mydb3");

var clientSchema = mongoose.Schema(
{
   //nom: { type: String, required: true },
   nom: { type: String, required: "Le nom est obligatoire" },
   //prenom: String,
   prenom: { type: String, required: "Le prénom est obligatoire" },
   adresse: { rue: String, ville: String, cp: String },
   age: Number
});

var Client = mongoose.model("Client", clientSchema);

//var c = new Client({ nom: "", prenom: "Christophe" });
var c = new Client({ nom: "", prenom: "" });

c.save(function(err)
{
   //console.log(err);
   if (err)
   {
      for (var prop in err.errors)
      {
         var message = err.errors[prop].message;
         console.log(message);
      }
   }
   
   console.log("Liste des clients :");
   Client.find(function(err, clients)
   {
      console.log(clients);         
   });
});
