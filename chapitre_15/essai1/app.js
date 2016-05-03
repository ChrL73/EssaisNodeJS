var express = require('express');
var routes = require('./routes');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', routes.index);

app.get("/admin", function(req, res, next)
{
   res.write("<h2>Bonjour !</h2>");
   next();
});

app.get("/admin", function(req, res)
{
   res.end("<h3>Bienvenue dans la partie administration du site</h3>");
});

app.listen(3000);