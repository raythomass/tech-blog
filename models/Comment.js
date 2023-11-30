const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init (
    {
        id: {
            type: DataTypes.INTEGER ,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
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
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        comment_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        comment_post: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model:'blogpost',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;