const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/database"); 

const Language = sequelize.define('Language', {
  // Model attributes are defined here
    name: {
        type: DataTypes.STRING,
    },

}, 
{
  underscored:true,
  timestamps: true,
});

module.exports = Language; 
 