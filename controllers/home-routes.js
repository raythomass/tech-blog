const router = require('express').Router();
const { BlogPost, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// router.get('/', (req, res) => {
//     BlogPost.findAll({})
//     .then(allPostData => {
//         const posts = allPostData.map((blogpost) => blogpost.get({ plain: true }));
//         res.render('homepage', {posts})
//     })
    
// });

router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({})
        const postData = await BlogPost.findAll({})
        const users = userData.map((user) => user.get({ plain: true }));
        const posts = postData.map((review) => review.get({ plain: true }));
        res.render('homepage', {users, posts})
    }
    catch(err) {
        res.status(500).json(err)
    }
});

router.get('/login', (req,res) => {
    res.render('login');
});

router.get('/signup', (req,res) => {
    res.render('signup');
})

module.exports = router;