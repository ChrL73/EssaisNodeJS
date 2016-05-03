var express = require("express");
var logger = require("morgan");

var app = express();

app.use(logger("dev"));

app.use(function(req, res)
{
   // Pas besoin de middleware comme indiqué dans le livre, la propriété 'query' est déjà présente dans l'objet 'req'
   res.end(JSON.stringify(req.query));
   //console.log(req.query.nom);
});

app.listen(3000);