var fs = require("fs");

function logger(filename)
{
   return function(req, res, next)
   {
      fs.writeFile(filename, req.url + "\r\n", { flag: "a+" });
      console.log(filename + " " + req.url);
      next();
   };
}

module.exports = logger;
