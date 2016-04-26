process.stdin.on("data", function(data)
{
   var name = data.toString();
   process.stdout.write("Bonjour " + name);
});
