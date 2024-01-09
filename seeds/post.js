const { BlogPost } = require('../models')

const postData = [
    {
    title: 'Hello Blog',
    content: 'This is my first blog',
    writer: 1
},
{
    title: 'Hello Blog number 2',
    content: 'This is my second blog',
    writer: 1
},
{
    title: 'Hello Blog 3',
    content: 'This is my third blog',
    writer: 1
},
];

const seedPosts = () => BlogPost.bulkCreate(postData);

module.exports = seedPosts;