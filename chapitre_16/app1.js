var express = require('express');
var logger = require("morgan");

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(logger("dev"));

app.get("/", function(req, res, next)
{
   res.set({"Content-Type": "text/html; charset=utf-8", "X-Nom": "Lefebvre", "X-Prenom": "Christophe"});
   res.end("<p>èù</p>");
});
   
app.get("/1", function(req, res, next)
{
   // En utilisant 'send' au lieu de 'end', 'Content-Type' est positionnée par défaut à 'text/html; charset=utf-8'
   res.send("<p>éäî</p>");
});

app.get("/2", function(req, res, next)
{
   res.setHeader("Content-Type", "text/plain; charset=utf-8");
   res.send("<p>Bonjour !</p>"); 
});

app.get("/3", function(req, res, next)
{
   res.charset = "utf-8"; // Apparemment inutile, contrarement à ce qui est dit dans le livre
   res.json({ nom: "Bùbù", prenom: "Dédé" });
});

app.get("/4", function(req, res, next)
{
   res.download("file.txt");
});

app.use(function(req, res)
{
   res.writeHead(404);
   //res.status(404);
   res.end("Erreur 404");
});

app.listen(3000);
