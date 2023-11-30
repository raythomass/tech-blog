const { BlogPost, Comment, User } = require('../../models');
const router = require('express').Router();

router.get('/', (req,res) => {
    try {
        BlogPost.findAll(
            {
                attributes: ['id', 'title', 'content', 'writer', 'date'],
                include: [
                    {
                        model: User,
                        attributes: 'username'
                    }, 
                    {
                        model: Comment,
                        attributes: ['id', 'comment_title', 'comment_content', 'comment_writer', 'commment_date'],
                        include: {
                            attributes: 'username'
                        }
                    }
                ]
            })
    } 
    catch(err) {
        res.status(500).json(err);
        console.log(err);
    }
});

router.get('/:id', (req,res) => {
    try {

    }
    catch {

    }
});

router.post('/', (req,res) => {
    try {

    }
    catch {

    }
});

router.post('/:id', (req,res) => {
    try {

    }
    catch {

    }
});

router.delete('/:id', (req,res) => {
    try {

    }
    catch {

    }
});