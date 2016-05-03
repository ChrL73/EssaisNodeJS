var connect = require("connect");
var logger = require("morgan");
var  fs = require("fs");

var app = connect();

// app.use(connect.logger("dev")) (utilisé dans le livre) ne fonctionne plus:
// Les middlewares tels que logger ne sont plus inclus dans connect (ni dans express), il faut les installer en plus de connect.
// Pour le logger, on peut utiliser le module "morgan" qui a première vue fonctionne comme fonctionnait connect.logger
app.use(logger("dev"));
//app.use(logger("combined"));
//app.use(logger(":remote-addr"));
app.use(logger("short", { stream: fs.createWriteStream("logs.txt") }));

app.use(function(req, res)
{
   res.end("Bonjour !");
});

app.listen(3000);