const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Task = sequelize.define("Task", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Task;
