var stream = require("stream");
var writable = new stream.Writable();

writable._write = function(chunk, encoding, callback)
{
   console.log("Appel _write");
   callback();
};

writable.on("error", function(error)
{
   console.log(error);
});

var ret1 = writable.write("1234567890", function()
{
   console.log("Fin write1");
});
console.log("Retour write1 = " + ret1);

// Décommenter pour voir l'effet de end()
//writable.end();

var ret2 = writable.write("2", function()
{
   console.log("Fin write2");
});
console.log("Retour write2 = " + ret2);

var ret3 = writable.write("3");
console.log("Retour write3 = " + ret3);
