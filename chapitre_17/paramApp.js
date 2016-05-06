var express = require('express');
var logger = require("morgan");

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(logger("dev"));

app.param("id", function(req, res, next, id)
{
   console.log("Valeur du paramètre id = " + id);
   console.log("Valeur de req.params.id = " + req.params.id);
   if (!id.match(/^\d+$/)) next("route");
   else next();
});

app.get("/clients/:id", function(req, res)
{
   res.end("Valeur de :id = " + req.params.id);
});

app.listen(3000);
