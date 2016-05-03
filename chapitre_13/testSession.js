var express = require('express');
var logger = require("morgan");
var session = require('express-session');

var app = express();

app.use(logger("dev"));

app.use(session(
{
  secret: 'gluonnette',
  resave: false,
  saveUninitialized: true
}));

app.use(function(req, res)
{
   for (var prop in req.query) req.session[prop] = req.query[prop];
   res.end(JSON.stringify(req.session));
});

app.listen(3000);
