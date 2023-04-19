const { Sequelize } = require("sequelize");
const defineTask = require("./models/task");

const databaseTest = async () => {
  const dbClient = new Sequelize(
    `postgres://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.URL}:${process.env.PORT}/${process.env.DBNAME}`
  );

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
