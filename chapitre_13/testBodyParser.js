var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");

var app = express();

app.use(logger("dev"));
app.use(express.static("forms"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res)
{
   res.end(JSON.stringify(req.body));
});

app.listen(3000);