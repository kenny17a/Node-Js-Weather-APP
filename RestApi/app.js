const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
app.use(express.json());
PORT = process.env.PORT || 3100;

let users = [];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  const createduser = req.body;
  const userId = uuidv4();
  const userWithId = { ...createduser, id: userId };

  users.push(userWithId);
  res.send(`User with name ${createduser.firstName} added to the database`);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
});

app.patch("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  const { firstName, lastName, age } = req.body;
  if (firstName) {
    user.firstName = firstName;
  }
  if (lastName) {
    user.lastName = lastName;
  }
  if (age) {
    user.age = age;
  }

  res.send(`The User with ${id} is updated successfully`);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  removeUser = users.filter((user) => user.id !== id);
  res.send(`The ${id} has been removed successfully.`);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
