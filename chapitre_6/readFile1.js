var fs = require("fs");

fs.readFile("file.txt", { encoding: "utf-8" }, function(err, data)
{
   console.log("Contenu du fichier:");
   console.log(data);
});

console.log("Suite du programme");
