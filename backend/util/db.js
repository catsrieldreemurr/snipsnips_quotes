const Sequelize = require("sequelize");
const fs = require("fs");
const path = require('path');

const caCertPath = path.resolve(__dirname, '..', process.env.DB_CA_PATH || 'ca.pem');

require("dotenv").config();

const sequelize = new Sequelize({
  dialect: 'mysql', 
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT, 
  host: process.env.DB_HOST,

  dialectOptions: {
    ssl: {
      rejectUnauthorized: true,
      ca: fs.readFileSync(caCertPath).toString(),
    },
  }
})

module.exports = sequelize;