var async = require("async");

async.parallel([
   function(callback)
   {
      setTimeout(function()
      {
         console.log("fonction1");
         callback(false, 1);
      }, 1500);
   },
   function(callback)
   {
      setTimeout(function()
      {
         console.log("fonction2");
         callback(false, 2);
         //callback(true, 2);
      }, 1000);
   },
   function(callback)
   {
      setTimeout(function()
      {
         console.log("fonction3");
         callback(false, 3);
      }, 500);
   }
], function(err, results)
{
   console.log("err : " + err);
   console.log("results : " + results);
});
