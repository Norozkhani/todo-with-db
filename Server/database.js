const { Sequelize } = require("sequelize");

async function main() {
  const sequelize = new Sequelize(
    `postgres://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.URL}:${process.env.PORT}/${process.env.DBNAME}`
  );

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
