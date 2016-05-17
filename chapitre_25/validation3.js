var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/mydb3");

var clientSchema = mongoose.Schema(
{
   nom: String,
   prenom: String,
   adresse: { rue: String, ville: String, cp: String },
   age:
   {
      type: Number,
      required: "Le champ age est obligatoire",
      /*validate: function(value)
      {
         if (value < 7 || value > 77) return false;
         return true;
      }*/
      validate: { validator: function(value)
      {
         if (value < 7 || value > 77) return false;
         return true;
      },
      msg: "L'âge doît être compris entre 7 et 77 ans !" }
   }
});

var Client = mongoose.model("Client", clientSchema);

var c = new Client({ nom: "Lefebvre", prenom: "Titouan", age: 4 });

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
