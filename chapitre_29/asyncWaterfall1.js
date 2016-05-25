var async = require("async");

var a = 1, b = 2, c = 3, d = 4;

async.waterfall([
   function(callback)
   {
      setTimeout(function()
      {
         console.log("fonction1");
         callback(false, a + b);
      }, 1500);
   },
   function(res1, callback)
   {
      setTimeout(function()
      {
         console.log("fonction2");
         callback(false, res1, c + d);
      }, 1000);
   },
   function(res1, res2, callback)
   {
      setTimeout(function()
      {
         console.log("fonction3");
         callback(false, res1 * res2);
      }, 500);
   }
], function(err, results)
{
   console.log("err : " + err);
   console.log("results : " + results);
});
