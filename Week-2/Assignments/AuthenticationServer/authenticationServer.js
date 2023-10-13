/**
  You need to create a HTTP server in Node.js which will handle the logic of an authentication server.
  - Don't need to use any database to store the data.
  - Save the users and their signup/login data in an array in a variable
  - You can store the passwords in plain text (as is) in the variable for now

  The expected API endpoints are defined below,
  1. POST /signup - User Signup
    Description: Allows users to create an account. This should be stored in an array on the server, and a unique id should be generated for every new user that is added.
    Request Body: JSON object with username, password, firstName and lastName fields.
    Response: 201 Created if successful, or 400 Bad Request if the username already exists.
    Example: POST http://localhost:3000/signup

  2. POST /login - User Login
    Description: Gets user back their details like firstname, lastname and id
    Request Body: JSON object with username and password fields.
    Response: 200 OK with an authentication token in JSON format if successful, or 401 Unauthorized if the credentials are invalid.
    Example: POST http://localhost:3000/login

  3. GET /data - Fetch all user's names and ids from the server (Protected route)
    Description: Gets details of all users like firstname, lastname and id in an array format. Returned object should have a key called users which contains the list of all users with their email/firstname/lastname.
    The users username and password should be fetched from the headers and checked before the array is returned
    Response: 200 OK with the protected data in JSON format if the username and password in headers are valid, or 401 Unauthorized if the username and password are missing or invalid.
    Example: GET http://localhost:3000/data

  - For any other route not defined in the server return 404

  Testing the server - run `npm run test-authenticationServer` command in terminal
 */

// write your logic here, DONT WRITE app.listen(3000) when you're running tests, the tests will automatically start the server

const usersData = [
  {
    username: "ssk1100",
    password: "123456",
    firstName: "Shubham",
    lastName: "Kadam",
    userId: 1,
  },
];

const express = require("express");
const app = express();

const port = 3000;
app.listen(port, (req, res) => {
  console.log(`Started listening on Port ${3000}`);
});

app.get("/", (req, res) => {
  res.status(200).send("The server is up");
});

// middleware
app.use(express.json());

// User Signup
app.post("/signup", (req, res) => {
  const { username, password, firstName, lastName } = req.body;
  if (usersData.includes((user) => user.username === username)) {
    res.status(400).send("Username already exists");
  } else {
    const userId = usersData.length + 1;
    usersData.push({ username, password, firstName, lastName, userId: userId });
    res.status(200).send("Account created successfully");
  }
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const isPresent = usersData.find(
    (user) => user.username === username && user.password === password
  );
  if (isPresent) {
    res.status(200).send(isPresent);
  } else {
    res.status(404).send("Not found");
  }
});

app.get("/usersdata", (req, res) => {
  const data = { usersList: usersData };
  if (usersData.length === 0) {
    res.status(400).send("No Records found");
  } else {
    res.status(200).send(data);
  }
});
