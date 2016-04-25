var fs = require("fs");

fs.mkdir("newDir", function(err)
{
   if (err) console.log(err);
   else console.log("Répertoire créé");
});
