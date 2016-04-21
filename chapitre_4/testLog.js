console.log("Je m'appelle %s et j'ai %d ans", "Christophe", 42);

console.log("Début de boucle");
console.time("Durée de boucle");

var i, j;
for (i = 0; i < 100000000; ++i)
{
   for (j = 0; j < 10; ++j);
}

console.timeEnd("Durée de boucle");
console.log("Fin de boucle");

console.dir(console);
console.log("");
console.log(console);
console.log("");

var util = require("util");
var obj = { nom: "Lefebvre", prenom: "Christophe", age: 42 };
var str = util.format("La personne est %j", obj);

console.log(str);
