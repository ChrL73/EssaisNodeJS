var async = require("async");

async.each([1, 2, 3], function(elem, callback)
{
   console.log("elem = " + elem);
   if (elem == 1) callback(false);
   else callback(true);
},
function(err)
{
   console.log("err = " + err);
});
