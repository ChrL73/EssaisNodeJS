function errorHandler()
{
   return function(err, req, res, next)
   {
      console.log("errorHandler");
      if (err)
      {
         res.setHeader('Content-Type', 'text/html; charset="utf-8"');
         res.writeHead(500);
         res.end("<h2>Erreur !</h2><br><pre>" + err.stack + "</pre>");
      }
      else
      {
         next();
      }
   };
}

module.exports = errorHandler;