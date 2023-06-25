// Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.
const fs = require("fs");

// Read file asynchronously
fs.readFile("./data.txt", "utf8", (err, data) => {
  if (err) throw err; // Handle error
  console.log(data); // Output file contents to console
});

// Using promise

function readFromFileUsingPromise() {
  const fsPromise = require("fs/promises");

  fsPromise
    .readFile("./data.txt", "utf-8")
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
// readFromFileUsingPromise();

// Synchronous version
function readFromFileSynchronously() {
  const data = fs.readFileSync("./data.txt", "utf-8");
  console.log(data);
}

readFromFileSynchronously();
