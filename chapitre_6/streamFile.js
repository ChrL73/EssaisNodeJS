var fs = require("fs");

var readStream = fs.createReadStream("file.txt");
var writeStream = fs.createWriteStream("file2.txt");
readStream.pipe(writeStream);

fs.readFile("file2.txt", function(err, data)
{
   console.log(data.toString());
}); 
