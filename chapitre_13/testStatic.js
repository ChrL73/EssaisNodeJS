var express = require("express");
var logger = require("morgan");

var app = express();

app.use(logger("dev"));

app.use(express.static("public/images"));
app.use(express.static("public/html"));

app.use(function(req, res)
{
   res.end("Bonjour !");
});

app.listen(3000);