const {DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Donor = sequelize.define('Donor', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mobile: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    bloodGroup: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Donor;
        