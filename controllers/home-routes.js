const router = require('express').Router();
const { BlogPost, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    BlogPost.findAll({})
    .then(allPostData => {
        const posts = allPostData.map((blogpost) => blogpost.get({ plain: true }));
        res.render('homepage', {posts})
    })
    
});

router.get('/login', (req,res) => {
    res.render('login');
});

router.get('/signup', (req,res) => {
    res.render('signup');
})

module.exports = router;