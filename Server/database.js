const { Sequelize } = require("sequelize");
const defineTask = require("./models/task");
require("dotenv").config();

const databaseTest = async () => {
  const { USERNAME, PASSWORD, URL, PORT, DBNAME } = process.env;
  const dbClient = new Sequelize(DBNAME, USERNAME, PASSWORD, {
    host: URL,
    port: PORT,
    dialect: "postgres",
  });
  try {
    await dbClient.authenticate();
    console.log("Connection has been established successfully.");
    // await sequelize.sync({ force: true });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  const Task = defineTask(dbClient);
  return { dbClient, Task };
};

module.exports = { databaseTest };
