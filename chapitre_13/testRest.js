var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();

app.use(logger("dev"));
app.use(express.static("forms"));
app.use(bodyParser.urlencoded({ extended: false }));

// La ligne du livre suivante ne fonctionne pas
//app.use(methodOverride());

// Remplacer la ligne du livre par le bloc suivant:
app.use(methodOverride(function(req, res)
{
  if (req.body && typeof req.body === 'object' && '_method' in req.body)
  {
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

app.use(function(req, res)
{
   res.setHeader('Content-Type', 'text/html; charset="utf-8"');
   res.end(req.method + " " + req.url + "<br>" + JSON.stringify(req.body));
});

app.listen(3000);
