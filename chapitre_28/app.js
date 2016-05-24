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

app.get("/clients/voir/:id", function(req, res)
{
   var id = req.params.id;
   Client.findById(id, function(err, client)
   {
      res.render("show.ejs", { client: client });
   });
});

app.get("/clients/modifier/:id", function(req, res)
{
   var id = req.params.id;
   Client.findById(id, function(err, client)
   {
      res.render("edit.ejs", { client: client });
   });
});

app.get("/clients/supprimer/:id", function(req, res)
{
   var id = req.params.id;
   Client.findByIdAndRemove(id, function(err, client)
   {
      res.redirect("/clients");
   });
});

app.get("/clients/valider/:id?", function(req, res)
{
   var id = req.params.id;
   var nom = req.query["nom"]; // req.param("nom") utilisé dans le livre est deprecated
   var prenom = req.query["prenom"];
   if (id)
   {
      Client.findByIdAndUpdate(id, { nom: nom, prenom: prenom }, function(err, client)
      {
         res.redirect("/clients");
      });
   }
   else
   {
      Client.create({ nom: nom, prenom: prenom }, function(err, client)
      {
         res.redirect("/clients");
      });
   }
});

app.get("/clients/new", function(req, res)
{
   res.render("new.ejs");
});

app.listen(3000, function()
{
   console.log("Server listening on port 3000...");
});
