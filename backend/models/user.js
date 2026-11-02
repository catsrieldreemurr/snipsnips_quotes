const Sequelize = require("sequelize");

const sequelize = require("../util/db");

const User = sequelize.define("user", {
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true, 
    allowNull: false, 
    primaryKey: true
  }, 
  userName: {
    type: Sequelize.STRING(20),
    allowNull: false,
    unique: true
  }, 
  passwordHash: {
    type: Sequelize.STRING(255),
    allowNull: false
  }

})

module.exports = User;