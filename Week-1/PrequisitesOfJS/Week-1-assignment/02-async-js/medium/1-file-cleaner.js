// algorithm
// 1. Read a file
// 2. trim out all the extra spaces
// 3. write the updated file to the same file

// const fs = require("fs");

// fs.readFile("./file.txt", "utf-8", (err, data) => {
//   const updatedText = data.replace(/\s+/g, " ").trim();
//   console.log(updatedText);
// });

const fsPromises = require("fs/promises");

function fileCleaner() {
  fsPromises
    .readFile("./file.txt", "utf-8")
    .then((data) => {
      const updatedText = data.replace(/\s+/g, " ").trim();
      return fsPromises.writeFile("./file.txt", updatedText);
    })
    .then(() => {
      console.log("write success");
    })
    .catch((error) => {
      console.log(error);
    });
}

fileCleaner();
