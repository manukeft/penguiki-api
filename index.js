const express = require("express");
const app = express();

const db = require("./db");

const especiesController = require("./especies/especiesController");

app.use("/", especiesController);

const port = "8080";

app.listen(port, function () {
  console.log("Express server listening on port " + port);
});
