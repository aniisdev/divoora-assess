const {Sequelize} = require('sequelize');
    const connection = new Sequelize(process.env.DB_URI,{
    dialect:"postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
          }
    } 
});
module.exports = connection;
