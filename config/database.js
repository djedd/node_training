require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,  // to active log for queries
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  }
});


module.exports = sequelize;