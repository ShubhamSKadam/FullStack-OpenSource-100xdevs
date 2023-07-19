const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3000;

// middleware function
// function middleware1(req, res, next){
//   console.log("middleware1 : " + req.headers.counter);
//   next();
// }

// register middleware function
// app.use(middleware1);

app.use(bodyParser.json());

function calculateSum(counter) {
  var sum = 0;
  for (let i = 0; i <= counter; i++) {
    sum += i;
  }
  return sum;
}

function calculateMul(counter) {
  var answer = 1;
  for (let i = 1; i <= counter; i++) {
    answer = answer * i;
  }
  return answer;
}

function handleFirstRequest(req, res) {
  const counter = req.body.counter;
  // const counter = req.query.counter;

  var sumAnswer = calculateSum(counter);
  var mulAnswer = calculateMul(counter);
  var answerObject = {
    sum: sumAnswer,
    mul: mulAnswer,
  };
  res.status(200).send(answerObject);
}

function givePage(req, res) {
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Hello from page</title>
  </head>
  <body>
    <b>Hi Shubham</b>
  </body>
</html>
`);
}

app.post("/handleSum", handleFirstRequest);
app.get("/", givePage);
// app.get("/createUser", createUser);
function started() {
  console.log(`Example app listening on port ${port}`);
}
app.listen(port, started);
