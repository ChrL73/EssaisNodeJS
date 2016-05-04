var express = require('express');
var routes = require('./routes');
var logger = require("morgan");
var util = require('util');

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(logger("dev"));

app.get('/', routes.index);

app.all("/testAll", function(req, res, next)
{
   res.end("<p>Test de app.all</p>");
});

app.get(/ac/, function(req, res)
{
   res.end("<p>/ac/</p>")
});

app.get("/clients/:id", function(req, res)
{
   res.end("Valeur de :id = " + req.params.id);
});

app.get("/admin", function(req, res, next)
{
   res.write("<p>Bonjour !</p>");
   next();
});

app.get("/admin", function(req, res)
{
   var html = "";
   // 'app.routes' (indiqué dans le livre) ne fonctionne plus.
   // Utiliser 'app._route.stack' à la place, qui contient des "layer"
   // (un "layer" ne correspond pas forcément à une route)
   app._router.stack.forEach(function(layer)
   {
      if(layer.route) html += "<p>" + util.inspect(layer.route) + "</p>";
   });
   res.end(html);
   
   //res.end("<h3>Bienvenue dans la partie administration du site</h3>");
});

console.log(util.inspect(app._router.stack));

app.listen(3000)