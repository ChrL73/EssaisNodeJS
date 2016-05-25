var async = require("async");

async.sortBy([6, 5, 10, 2, 3, 7], function(elem, callback)
{
   console.log("elem : " + elem);
   //callback(false, elem);
   callback(false, -elem);
},
function(err, results)
{
   console.log("results : " + results);
});
