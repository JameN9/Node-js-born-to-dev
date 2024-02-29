const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require('path');

const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));
app.use(express.static(path.join(__filename,"/public/img/")));

app.get("/", (req, res) => {
  res.send("dasdsadas");
});

app.listen(port, () => {
  debug("It's port" + chalk.green(" : " + port));
});
