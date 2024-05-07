require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  logging: false,  // to active log for queries
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  }
});

const connectDB = async () => {
  try {
      await sequelize.authenticate();
      console.log('DB connected successfully');
      await sequelize.sync();
      console.log('DB Synced successfully');
  } catch (err) {
      console.error('Error trying to connect to DB:', err);
  }
};

module.exports = { sequelize, connectDB };
