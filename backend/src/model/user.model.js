const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../config/database"); 

const User = sequelize.define('User', {
  // Model attributes are defined here
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {  
    type: DataTypes.STRING

  },
  email:{
    type:DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  }
}, 
{
  underscored:true,
  timestamps: true,
});

module.exports = User; 
// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true