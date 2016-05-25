var async = require("async");

async.filter([1, 2, 3], function(elem, callback)
{
   console.log("elem = " + elem);
   if (elem >= 2) callback(false, true); // Prend 2 arguments et non 1 comme dans le livre
   else callback(false, false);
},
function(err, results) // Prend 2 arguments et non 1 comme dans le livre ('err' en plus de 'results')
{
   console.log("results = " + results);
});
