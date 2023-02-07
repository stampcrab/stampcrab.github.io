const cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

const path = require("path");

const express = require("express");
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  let Name = req.cookies.Name;
  res.render("addCookie", { Name });
});
app.post("/getInput", function (req, res) {
  var minute = 60000;
  if (req.body.name) {
    res.cookie("Name", req.body.name, {
      maxAge: minute,
    });
  }
  res.redirect("/");
});
app.listen(3000);
