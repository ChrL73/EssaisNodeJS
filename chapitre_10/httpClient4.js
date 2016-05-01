var http = require("http");

var options = {
   hostname: "localhost",
   port: 3000,
   method: "POST",
   path: "/"
};

var request = http.request(options, function(response)
{
   console.log("**** statusCode: " + response.statusCode);
   response.setEncoding("utf-8");
   response.on("data", function(chunk)
   {
      console.log("**** Données reçues: " + chunk);
   });
});

request.on("error", function(e)
{
   console.log("Erreur dans http.request(): " + e.message);
});

request.write("Données 1 transmises au serveur");
request.write("Données 2 transmises au serveur");
request.end("Données 3 transmises au serveur");