var fs = require("fs");
fs.open("file.txt", "r", function(err, fd)
{
   var buffer = new Buffer(100);
   fs.read(fd, buffer, 0, buffer.length, 0, function(err, bytesRead, data)
   {
      console.log("Le nombre d'octets lus est : " + bytesRead);
      console.log(data);
      console.log(data.toString());
   });
});
