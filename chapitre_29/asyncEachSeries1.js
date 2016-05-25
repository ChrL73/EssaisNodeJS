var async = require("async");

async.eachSeries([1, 2, 3], function(elem, callback)
{
   setTimeout(function()
   {
      console.log("elem = " + elem);
      callback(false);
   }, (4 - elem) * 500);
}, function(err)
{
   console.log("err = " + err);
});
