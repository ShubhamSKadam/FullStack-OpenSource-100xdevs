const express = require("express");
const app = express();
const port = 3000;

function calculateSum(counter) {
  var sum = 0;
  for (let i = 0; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

function handleFirstRequest(req, res) {
  const counter = req.query.counter;
  var answer = calculateSum(counter);
  res.send(`The sum from 1 to ${counter} is ${answer}`);
}

function createUser(req, res) {
  res.send("Hello World");
}

app.get("/handleSum", handleFirstRequest);
app.get("/createUser", createUser);
function started() {
  console.log(`Example app listening on port ${port}`);
}
app.listen(port, started);
