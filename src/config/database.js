const path = require("path");
const webconfig = require("./webconfig");
const env = process.env.NODE_ENV
const postgresql = webconfig.database[env].postgresql;

module.exports = {
  username: postgresql.DB_USERNAME,
  password: postgresql.DB_PASSWORD,
  database: postgresql.DB_NAME,
  host: postgresql.DB_HOST,
  dialect: postgresql.DIALECT || "postgres",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
