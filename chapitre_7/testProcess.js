var child_process = require("child_process");

child_process.exec("ls -a", function(err, stdout, stderr)
{
   if (err) console.log(stderr);
   else console.log(stdout);
});
