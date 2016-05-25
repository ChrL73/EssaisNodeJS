var async = require("async");

async.map([1, 2, 3], function(elem, callback)
{
   console.log("elem = " + elem);
   if (elem == 1) callback(false, 2 * elem);
   else callback(true, 2 * elem);
},
function(err, results)
{
   console.log("results = " + results);
});
