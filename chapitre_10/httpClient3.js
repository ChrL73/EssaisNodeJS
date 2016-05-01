var http = require("http");

var options = {
   hostname: "diaphnea.com",
   port: 80,
   path: "/",
   method: "GET"
};

var request = http.request(options, function(response)
{
   console.log("**** statusCode: " + response.statusCode);
   console.log("**** headers: " + JSON.stringify(response.headers));
   response.setEncoding("utf-8");
   response.on("data", function(chunk)
   {
      console.log("**** Données reçues: " + chunk);
   });
});

request.on("error", function(e)
{
   console.log("Erreur dans http.request():" + e.message);
})

request.end();
