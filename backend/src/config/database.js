const { Sequelize } = require('sequelize');


// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect: "mysql"/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize.authenticate().then(()=> {
    console.log("Sequelize Connected with Sucess");
})
.catch((error)=>{
    console.log(error);
});

sequelize.sync().then(()=>{console.log("Sync Sequelize");
})
.catch(()=>{
  console.log("Errors Sync Sequelize");
});

module.exports = sequelize;