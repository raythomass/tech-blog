const BlogPost = require('./BlogPost');
const Comment = require('./Comment');
const User = require('./User');

BlogPost.belongsTo(User, {
    foreignKey: 'writer'
})


module.exports = { BlogPost, Comment, User};