db = connect("mydb");

var client1 = 
{
   nom: "Dupont",
   prenom: "Fred",
   adresse:
   {
      rue: "1 rue de l'ouest",
      cp: "75001",
      ville: "Paris"
   }
};
db.clients.insert(client1);

var client2 =
{
   nom: "Durand",
   prenom: "Bill",
   adresse:
   {
      rue: "1 rue de l'est",
      cp: "75002",
      ville: "Paris"
   }
};
db.clients.insert(client2);

var client3 =
{
   nom: "Duchemin",
   prenom: "Chris",
   adresse:
   {
      rue: "3 rue du nord",
      cp: "69000",
      ville: "Lyon"
   }
};
db.clients.insert(client3);

