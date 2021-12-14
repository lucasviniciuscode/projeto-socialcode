const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/database"); 

const Actor = sequelize.define("Actor", {
  // Model attributes are defined here
      
  first_name: {
    type: DataTypes.STRING,
  },
  last_name: {
        type: DataTypes.STRING,
  },

}, 
{
  underscored:true,   
  timestamps: true,
});

module.exports = Actor; 
 