// var http = require("http");
// http
//   .createServer(function (req, res) {
//     res.write("Welcome to Node class!");
//     res.end();
//   })
//   .listen(8080);

var fs = require("fs");
fs.writeFileSync("notebook.txt", "welcome to Node class!");
