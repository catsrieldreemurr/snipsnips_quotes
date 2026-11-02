const Sequelize = require("sequelize");

const sequelize = require("../util/db");

const Quote = sequelize.define("quote", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true, 
    allowNull: false, 
    primaryKey: true
  }, 
  quoteText: {
    type: Sequelize.TEXT,
  }, 
  publishDate: {
    type: Sequelize.DATE
  }
})

module.exports = Quote;