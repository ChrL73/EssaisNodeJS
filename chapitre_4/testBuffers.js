var buf = new Buffer("eèù");
console.log(buf);
console.log(buf.length);

buf = new Buffer(7);
console.log(buf);
console.log("");

buf = new Buffer(10);
console.log(buf);
console.log(buf.toString());

buf.write("Bonjour", 1, 3);
console.log(buf);
console.log(buf.toString());
