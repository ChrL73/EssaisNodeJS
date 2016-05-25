var async = require("async");

async.detect([1, 2, 3], function(elem, callback)
{
   setTimeout(function()
   {
      console.log("elem : " + elem);
      if (elem <= 2) callback(false, true); // Prend 2 arguments et non 1 comme dans le livre
      else callback(false, false);
   }, (4 - elem) * 500);
},
function(err, result) // Prend 2 arguments et non 1 comme dans le livre
{
   console.log("result : " + result);
});
