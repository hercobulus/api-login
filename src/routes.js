const routes = require("express").Router();
const package = require("../package.json");

const { User } = require("./app/models");

routes.get("/", (req, res) => {
  res.json({
    apiName: package.name,
    apiVersion: package.version,
    currentTime: new Date()
  });
});

routes.get("/user", async (req, res) => {
  const user = await User.create({
    name: "Daniel",
    email: "danielmiranda132@yahoo.com",
    password_hash: "12456"
  });

  return res.json(user);
});

module.exports = routes;
