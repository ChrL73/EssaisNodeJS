var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost/mydb2");

var clientSchema = mongoose.Schema({ nom: String, prenom: String, adresse: String });
var Client = mongoose.model("Client", clientSchema);

var c = new Client({ nom: "Obama", prenom: "Barack" });
c.adresse = "Washington";
c.save();
