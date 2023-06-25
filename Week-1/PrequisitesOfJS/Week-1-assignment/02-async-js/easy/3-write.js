// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

// Asynchronous Version
function asyncVersion() {
  const fs = require("fs");
  fs.writeFile("./data.txt", "I love JS", (err) => console.log(err));
}

// Synchronous Version
function syncVersion() {
  const fs = require("fs");
  const content = "I love JS kinda a lot now";
  fs.writeFileSync("./data.txt", content);
}

// Promise Version
function promiseVersion() {
  const fsPromise = require("fs/promises");

  fsPromise
    .writeFile("./data.txt", "I have kept my promise")
    .then(() => {
      console.log("written success");
    })
    .catch((err) => {
      console.log(err);
    });
}

promiseVersion();
