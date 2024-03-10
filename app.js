const express = require("express");
const ejs = require("ejs");
const bodyparser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use("/views", express.static("views"));
app.use("/img", express.static("img"));

app.get("/zoo", (req, res) => {
  //res.send("I am alive");
  res.render("editor");
});

/**/app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3001, () => {
  console.log('running on port 3001');
});