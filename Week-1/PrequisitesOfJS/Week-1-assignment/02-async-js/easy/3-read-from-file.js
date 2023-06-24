const fs = require("fs");

// Read file asynchronously
fs.readFile("./read.txt", "utf8", (err, data) => {
  if (err) throw err; // Handle error
  console.log(data); // Output file contents to console
});


