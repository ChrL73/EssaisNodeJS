var child_process = require("child_process");

//console.log("Début du processus principal");

var child = child_process.spawn("node", ["childProcess1.js"]);
child.stdin.write("Christophe");

child.stdout.on("data", function(data)
{
   //console.log("Données: " + data);
   console.log(data.toString());
});
child.stderr.on("data", function(data)
{
   //console.log("Erreur: " + data);
   console.log(data.toString());
});

//console.log("Fin du processus principal");

