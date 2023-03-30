const { Sequelize } = require("sequelize");

async function main() {
  const sequelize = new Sequelize(
    "postgres://hyper:Rox6kTdcxcRzPeEWB6Ff@104.199.12.40:5432/malena"
  );

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
