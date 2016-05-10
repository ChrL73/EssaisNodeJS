db = connect("mydb");

var client1 = 
{
   nom: "Dubois",
   prenom: "Manu",
   adresse:
   [ {
      rue: "1 rue du sud",
      cp: "75003",
      ville: "Paris"
   },
   {
      rue: "1 rue du centre",
      cp: "69000",
      ville: "Lyon"
   } ]
};
db.clients.insert(client1);