const express = require("express");
const path = require("path");
const app = express();

// const apiMiddleware = require("./middleware/apiKey")

const allRoutes = require("./routes/route.js");

// app.use(apiMiddleware);
app.use(allRoutes);
app.set("view engine", "ejs");

// app.use(express.static("public"));

app.listen(3000, () => {
  console.log("listening on port 3000");
});
