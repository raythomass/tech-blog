const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class BlogPost extends Model {}

BlogPost.init (
    {
        id: {
            type: DataTypes.INTEGER ,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        writer: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id'
            }
        },
        date: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }
);

module.exports = BlogPost;