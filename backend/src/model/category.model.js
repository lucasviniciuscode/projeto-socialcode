const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/database"); 

const Category = sequelize.define("Category", {
  // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
    },
}, 
{
  timestamps: true,
});

module.exports = Category; 
 