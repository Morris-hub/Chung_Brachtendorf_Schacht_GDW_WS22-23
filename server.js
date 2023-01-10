const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const fs = require("fs");

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname)));

app.get("/", function (req, res) {
  res.render("index.js");
});

app.listen(port);
console.log(`App listen on port ${port}`);