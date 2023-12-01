const router = require('express').Router();
const { BlogPost, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/login', (req,res) => {
    if (!req.session.loggedIn) {
        res.redirect('/')
        return
    }
    res.render('login');
});

router.get('/signup', (req,res) => {
    res.render('signup');
})

module.exports = router;