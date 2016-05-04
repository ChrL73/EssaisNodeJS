var express = require('express');
var logger = require("morgan");

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(logger("dev"));

app.use("/clients", function use1(req, res, next)
{
   console.log("use1");
   next();
   console.log("use1 fin");
});

app.use("/clients", function use2(req, res, next)
{
   console.log("use2");
   next();
   console.log("use2 fin");
});

app.get("/clients", function getClients(req, res, next)
{
   console.log("get");
   res.end("GET /clients OK");
   console.log("get fin");
});

app.listen(3000);
