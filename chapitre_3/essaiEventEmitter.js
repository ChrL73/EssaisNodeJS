var events = require("events");
var obj1 = new events.EventEmitter();

obj1.addListener("event1", function(nom, age)
{
   console.log("L'objet obj1 a reçu un événement event1, nom=" + nom + ", age=" + age + "ans");
});

obj1.emit("event1", "Christophe", 42);
