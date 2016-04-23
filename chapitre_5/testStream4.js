var stream = require("stream");
var readable = new stream.Readable();

readable._read = function(size)
{
   process.stdin.removeAllListeners("data").on("data", function(chunk)
   {
      chunk = chunk.toString().replace(/[\r\n]/g, "");
      if (chunk == "exit") this.pause();
      readable.push(chunk);
   });
};

readable.on("data", function(chunk)
{
   console.log(chunk);
});
