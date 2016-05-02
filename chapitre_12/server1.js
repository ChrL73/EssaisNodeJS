var connect = require("connect");
var logger = require("./loggerMiddleware.js");

// La méthode "connect.createServer()" expliquée p216 ne semble pas fonctionner (plus supportée dans la version actuelle de "connect" ?)
// La métode équivalente 'connect()' expliquée p222 fonctionne
var app = connect(); 

app.use(logger("logs2.txt"));

app.use(function (req, res, next)
{
   res.write("Bonjour !\n");
   next();
});

app.use(function (req, res)
{
   res.end("Au revoir...");
});

app.listen(3000);
console.log("Serveur HTTP démarré sur le port 3000...");