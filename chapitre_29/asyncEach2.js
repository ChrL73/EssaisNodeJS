var async = require("async");

async.each([3, 2, 1], function(elem, callback)
{
   setTimeout(function()
   {
      console.log("elem = " + elem);
      callback(false);
   }, elem * 1000);
},
function(err)
{
   console.log("err = " + err);
});
