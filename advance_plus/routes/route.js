// const router = require("express").Router();
const express = require("express");
const router = express.Router();
const apiMiddleware = require("../middleware/apiKey.js");

// for all routes to use the middleware
// router.use(apiMiddleware)

router.get("/", (req, res) => {
  res.render("index", { title: "Express and Node Course" });
  //   res.sendFile(path.resolve(__dirname + "/index.html"));
});

router.get("/cricket", (req, res) => {
  res.render("cricket", { title: "Cricket Tab" });
  // res.sendFile(path.resolve(__dirname + "/cricket.html"));
});

router.get("/badminton", (req, res) => {
  res.render("badminton", { title: "Badminton Tab" });
  // res.sendFile(path.resolve(__dirname + "/badminton.html"));
});

router.get("/download", (req, res) => {
  res.download(path.resolve(__dirname + "/badminton.html"));
});

router.get("/api/products", apiMiddleware, (req, res) => {
  res.json([
    {
      id: 1,
      name: "Bat",
    },
    {
      id: 2,
      name: "Racket",
    },
  ]);
});

module.exports = router;
