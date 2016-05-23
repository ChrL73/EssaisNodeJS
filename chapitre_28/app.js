var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/clients");

var clientSchema = mongoose.Schema(
{
   nom: String,
   prenom: String,
   adresse: String
});

var Client = mongoose.model("Client", clientSchema);

var express = require('express');
var app = express();

app.get("/clients", function(req, res)
{
   Client.find(function(err, clients)
   {
      res.render("clients.ejs", { clients: clients });
   });
});

app.listen(3000, function()
{
   console.log("Server listening on port 3000...");
});
