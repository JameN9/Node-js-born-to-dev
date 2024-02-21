const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(morgan('combined'));

app.get("/", (req, res) => {
  res.send("Hello das");
});

app.listen(port, () => {
  debug("It's port" + chalk.green(" : " + port));
});
