var express = require("express");
var logger = require("morgan");
var favicon = require("serve-favicon");

var app = express();

app.use(logger("dev"));
app.use(favicon("favicon.ico"));

app.use(function(req, res)
{
   res.end("Bonjour !");
});

app.listen(3000);