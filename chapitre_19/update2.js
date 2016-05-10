var db = connect("mydb");

/*db.clients.update({ nom: { $exists: false } },
                    { nom: "Martin", prenom: "François" });*/

//db.clients.update({ nom: "Martin" }, { $set: { age: 45, datemaj: new Date()} });

//db.clients.update({ nom: "Martin" }, { $inc: {age: 1} });

//db.clients.update({}, { $rename: {nom: "lastname", prenom: "firstname"} }, { multi: true });
//db.clients.update({}, { $rename: {lastname: "nom", firstname: "prenom"} }, { multi: true });

//db.clients.remove({ nom: "Martin" }, true);

var clients = db.clients.find();
clients.forEach(function(client)
{
   printjson(client);
});
