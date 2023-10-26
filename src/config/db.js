const Sequelize = require('sequelize');
const database = new Sequelize(
    'sistemas_distribuidos',
    'root',
    '',
    {
        dialect: 'mysql',
        host: 'localhost',
    }
);

module.exports = database;