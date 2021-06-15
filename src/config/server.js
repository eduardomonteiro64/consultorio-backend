const port = process.env.PORT || 8080;

const express = require("express");
const server = express();
const allowCors = require("./cors");

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(allowCors);

server.listen(port, function () {
  console.log(`BACKEND is running on port ${port}.`);
});

module.exports = server;
