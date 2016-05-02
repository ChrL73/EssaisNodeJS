var connect = require("connect");
var logger = require("./loggerMiddleware.js");
var errorHandler = require("./errorHandler.js");

var app = connect(); 

app.use(logger("logs2.txt"));

app.use(function(req, res, next)
{
   next(new Error("Il y a une erreur..."));
});

app.use(function (req, res, next)
{
   res.write("Bonjour !\n");
   next();
});

app.use(function (req, res)
{
   res.end("Au revoir...");
});

app.use(errorHandler());

app.listen(3009);