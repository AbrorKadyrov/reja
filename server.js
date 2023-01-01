const express = require("express");

const app = express();
const http = require("http");

// 1 Kirish code

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Session code

// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code

app.get("/", function (req, res) {
  res.end("<h1>Hello world Abror</h1>");
});

app.get("/gift", function (req, res) {
  res.end(`<h1 style = 'background:red'>You are on gift pages</h1>`);
});

// EJS framework

// app.post("/create-item", function (req, res) {
//   console.log(req.body);
//   res.json({ test: "success" });
// });

// app.get("/", function (req, res) {
//   res.render("harid");
// });

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running sucessfully on port: ${PORT}`);
});

console.log("server ");
