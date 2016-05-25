var async = require("async");

async.map([1, 2, 3], function(elem, callback)
{
   setTimeout(function()
   {
      console.log("elem = " + elem);
      callback(false, 2 * elem);
   }, (4 - elem) * 500);
},
function(err, results)
{
   console.log("results = " + results);
});
