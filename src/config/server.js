const bodyParser = require("body-parser");
const express = require("express");
const server = express();
const allowCors = require("./cors");

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(process.env.PORT || 3000, function () {
  console.log(`BACKEND is running on port ${process.env.PORT}.`);
});

module.exports = server;
