var mongoose = require("mongoose");

var db = mongoose.connect("mongodb://localhost/mydb");

mongoose.connection.on("error", function()
{
   console.log("Erreur de connexion à la base de données");
});

mongoose.connection.on("open", function()
{
   console.log("Connexion réussie à la base de données");
});
