require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    logging: false,
  }
);

sequelize.authenticate()
  .then(() => console.log('Connected to Railway MySQL successfully.'))
  .catch(err => console.error('MySQL connection error:', err));

module.exports = sequelize;
