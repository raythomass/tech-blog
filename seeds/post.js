const { BlogPost } = require('../models')

const postData = [
    {
    title: 'Hello Blog',
    content: 'This is my first blog',
    writer: 1
}
];

const seedPosts = () => BlogPost.bulkCreate(postData);

module.exports = seedPosts;