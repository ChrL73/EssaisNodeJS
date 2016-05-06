var express = require('express');
var logger = require("morgan");

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(logger("dev"));

app.set("title", "Liste des clients");

app.get("/clients", function(req, res)
{
   app.render("clients.ejs",
      { clients: [ {nom: "Lefebvre", prenom: "Christophe"},
                   {nom: "Blup", prenom: "Blip"},
                   {nom: "Martin", prenom: "François"}] },
      function(err, html)
      {
         console.log(html);
         html = html.replace("Blip", "Blop");
         res.send(html);
      });
});

app.listen(3000);
