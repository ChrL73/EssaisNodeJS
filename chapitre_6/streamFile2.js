var fs = require("fs");

var readStream = process.stdin;
var writeStream = fs.createWriteStream("file2.txt");
readStream.pipe(writeStream);

readStream.on("data", function(chunk)
{
   chunk = chunk.toString().replace(/[\r\n]/g, "");
   if (chunk == "exit")
   {
      fs.readFile("file2.txt", function(err, data)
      {
         console.log("\nContenu du fichier:");
         console.log(data.toString());
         writeStream.end(); // Fermer le stream en écriture
         readStream.pause(); // puis celui en lecture (dans cet ordre)
      });
   }
});
