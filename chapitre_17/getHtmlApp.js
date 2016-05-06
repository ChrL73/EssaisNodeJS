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

app.get("/1", function(req, res)
{
   var html = "";
   html += "<p><b>req.url</b> = " + req.url + "</p>";
   html += "<p><b>req.ip</b> = " + req.ip + "</p>";
   html += "<p><b>req.path</b> = " + req.path + "</p>";
   html += "<p><b>req.method</b> = " + req.method + "</p>";
   // deprecated: utiliser 'hostname'
   //html += "<p><b>req.host</b> = " + req.host + "</p>";
   html += "<p><b>req.hostname</b> = " + req.hostname + "</p>"; 
   html += "<p><b>req.protocol</b> = " + req.protocol + "</p>";
   html += "<p><b>req.xhr</b> = " + req.xhr + "</p>";
   res.send(html);
});

app.listen(3000);
