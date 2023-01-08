// Async function

console.log("Jack Ma maslahatlari");
const list = [
  "yahshi talaba boling", //0-20
  "togri bowshliq tanlang va koproq hato qiling", //20-30
  "ozingizning ishlaringizni bowlang", //30-40
  "siz kuchli bolgan narsalarni qiling", //40-50
  "yoshlarga invistitsiya qiling", //50-60
  "endi dam oling, foydasi yoq auuu!", //60
];

async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
      //1-case

      setInterval(() => {
        resolve(list[5]);
      }, 1000);

      //2-case

      // setTimeout(() => {
      //   resolve(list[5]);
      // }, 5000);
    });
  }
}
// console.log("passed here 0");
// maslahatBering(25)
//   .then((data) => {
//     console.log("Javob:", data);
//   })
//   .catch((err) => {
//     console.log("Error:", err);
//   });
// console.log("passed here 1");

async function run() {
  let javob = await maslahatBering(20);
  console.log(javob);

  javob = await maslahatBering(61);
  console.log(javob);

  javob = await maslahatBering(41);
  console.log(javob);
}

run();

// =================================================================

// const express = require("express");

// const app = express();
// const http = require("http");
// const fs = require("fs");

// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//   if (err) {
//     console.log("ERROR:", err);
//   } else {
//     user = JSON.parse(data);
//   }
// });

// // 1 Kirish code

// app.use(express.static("public"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // 2 Session code

// // 3 Views code
// app.set("views", "views");
// app.set("view engine", "ejs");

// // 4 Routing code

// // EJS framework

// app.post("/create-item", function (req, res) {
//   console.log(req.body);
//   res.json({ test: "success" });
// });

// app.get("/abror", (req, res) => {
//   res.render("develop", { user: user });
// });

// app.get("/", function (req, res) {
//   res.render("harid");
// });

// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function () {
//   console.log(`The server is running sucessfully on port: ${PORT}`);
// });

// console.log("server ");
