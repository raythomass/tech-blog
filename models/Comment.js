const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init (
    {
        id: {
            type: DataTypes.INTEGER ,
            allowNull: false,
            autoIncrement: true
        },
        comment_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comment_content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comment_writer: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'User',
                key: 'id'
            }
        },
        comment_date: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        comment_post: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model:'BlogPost',
                key: 'id'
            }
        }
    }
);

module.exports = Comment;