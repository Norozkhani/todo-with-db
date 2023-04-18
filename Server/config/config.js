require("dotenv").config();
const { URL, PORT, USERNAME, PASSWORD, DBNAME } = process.env;

module.exports = {
  development: {
    username: USERNAME,
    password: PASSWORD,
    database: DBNAME,
    host: URL,
    port: PORT,
    dialect: "postgres",
  },
  test: {
    username: USERNAME,
    password: PASSWORD,
    database: DBNAME,
    host: URL,
    port: PORT,
    dialect: "postgres",
  },
  production: {
    username: USERNAME,
    password: PASSWORD,
    database: DBNAME,
    host: URL,
    port: PORT,
    dialect: "postgres",
  },
};
