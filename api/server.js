const express = require("express");
const helmet = require("helmet");
const projectsRouter = require("../routes/projects");
const actionsRouter = require("../routes/actions");

const server = express();

server.use(express.json());
server.use(helmet());
server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

server.get("/", (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});

module.exports = server;
