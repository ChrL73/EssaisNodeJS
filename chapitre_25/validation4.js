var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/mydb3");

var clientSchema = mongoose.Schema(
{
   nom:
   {
      type: String,
      validate: function(value, respond)
      {
         var nom = this.nom;
         var prenom = this.prenom;
         Client.findOne({ nom: nom, prenom: prenom}, function(err, client)
         {
            if (client) respond(false);
            else respond(true);
         });
      }
   },
   prenom: String,
   adresse: { rue: String, ville: String, cp: String },
   age: Number
});

var Client = mongoose.model("Client", clientSchema);

var c = new Client({ nom: "Lefebvre", prenom: "Christophe", age: 42 });

c.save(function(err)
{
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
