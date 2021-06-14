const express = require("express");
const server = express();
const allowCors = require("./cors");

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(allowCors);

server.listen(process.env.PORT || 3000, function () {
  console.log(`BACKEND is running on port ${process.env.PORT}.`);
});

module.exports = server;
