const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();

const { databaseTest } = require("./database");
const taskRoute = require("./routes/task");

const main = async () => {
  const app = express();
  const db = await databaseTest();

  app.use(morgan("tiny"));

  const port = 3000;

  app.use(bodyParser.json());
  app.use(cors());
  taskRoute.init(db, app);
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
};

main();
