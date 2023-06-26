const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/") {
    res.end("Welcome to the world of sports!");
  } else if (pathName === "/cricket") {
    res.end("Welome to the Cricket page");
  } else if (pathName === "/badminton") {
    res.end("Welome to the badminton page");
  } else if (pathName === "/hockey") {
    res.end("Welome to the hockey page");
  } else if (pathName === "/tennis") {
    res.end("Welome to the tennis page");
  } else {
    res.end("No routes is specified");
  }
});
server.listen(3000, () => {
  console.log("listening on port 3000");
});
