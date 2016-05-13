var mongoose = require("mongoose");

var clientSchema = mongoose.Schema({ nom: String, prenom: String, adresse: String });

var Client = mongoose.model("Client", clientSchema);

console.log(Client);