const BlogPost = require('./BlogPost');
const Comment = require('./Comment');
const User = require('./User');

BlogPost.hasMany(Comment)

BlogPost.belongsTo(User)

User.hasMany(Comment)

User.hasMany(BlogPost)

Comment.belongsTo(BlogPost)

Comment.belongsTo(User)

