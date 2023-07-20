const { json } = require("body-parser");

var sendObj = {
  method: "GET",
};

function logResponseBody(jsonBody) {
  console.log(jsonBody);
}

function callBackFn(result) {
  result.json().then(logResponseBody);
}
fetch("http://localhost:3000/handlesum?counter=5", sendObj).then(callBackFn);
