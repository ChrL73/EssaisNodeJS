var connect = require("express");
var logger = require("morgan");
var errorHandler = require("errorhandler");

var app = connect();
errorHandler.title = "J'ai changé le titre...";

app.use(logger("dev"));

app.use(function(req, res, next)
{
   next(new Error("Ceci est une erreur..."));
});

//app.use(connect.errorHandler()); ne fonctionne plus: Utiliser le module "errorhandler" à la place
app.use(errorHandler());

app.use(function(req, res)
{
   res.end("Bonjour !");
});

app.listen(3000);
