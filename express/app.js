const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Express Home page!");
});

app.get("/cricket", (req, res) => {
  res.end("Welcome to the Cricket page!");
});

app.get("/login", (req, res) => {
  res.end("Welcome to the Login page!");
});
app.listen(3000, () => {
  console.log("listening on port 3000 ");
});
