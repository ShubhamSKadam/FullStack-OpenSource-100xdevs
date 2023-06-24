const fs = require("fs");
const data = "I kinda love Javascript";

const filePath = "./read.txt";

fs.writeFile(filePath, data, function (err) {
  if (err) {
    console.log("error writing file");
  } else {
    console.log("success");
  }
});
