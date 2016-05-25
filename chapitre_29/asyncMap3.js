var async = require("async");
var fs = require("fs");

async.map(["asyncEach1.js", "asyncEach2.js", "asyncMap1.js"], fs.stat, function(err, results)
{
   results.forEach(function(result)
   {
      console.log("\nresult = " + JSON.stringify(result));
   });
});
