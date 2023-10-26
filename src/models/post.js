const sequelize = require('sequelize')
const database = require('../config/db')

const Post = database.define('post', {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize.STRING,
    }
})

module.exports = Post;