var async = require("async");
var fs = require("fs");

async.filter(["asyncEach1.js", "courgette.js", "asyncEach2.js", "patate.js", "asyncMap1.js"], function(file, callback)
{
   // fs.exists utilisé dans le livre est deprecated
   fs.access(file, function(err)
   {
      callback(false, !err) // Prend 2 arguments et non 1 comme dans le livre
   }); 
}, function(err, results) // Prend 2 arguments et non 1 comme dans le livre
{
   console.log("results : " + results);
});
