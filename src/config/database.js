const path = require("path");
require("dotenv").config({
  path:
    process.env.NODE_ENV === "test"
      ? path.resolve("./.env.test")
      : path.resolve("./.env")
});

module.exports = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DIALECT || "postgres",
  storage: "./__tests__/database.sqlite",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
