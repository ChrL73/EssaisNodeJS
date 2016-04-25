var fs = require("fs");
fs.writeFile("file2.txt", "Bonjour", function(err)
{
   fs.readFile("file2.txt", { flag: "r", encoding: "utf-8" }, function(err, data)
   {
      console.log(data);
   });
   
});
