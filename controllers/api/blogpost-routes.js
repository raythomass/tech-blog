const { BlogPost, Comment, User } = require('../../models');
const router = require('express').Router();

router.get('/', (req,res) => {
    try {
        const allPosts = BlogPost.findAll(
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
            res.status(200).json(allPosts)
    } 
    catch(err) {
        res.status(500).json(err);
        console.log(err);
    }
});

router.get('/:id', (req,res) => {
    try {
        const somePosts = BlogPost.findOne(
            {
                where: {
                    id: req.params.id
                },
                attributes: ['id', 'title', 'content', 'writer', 'date'],
                include: [
                    {
                        model: User,
                        attributes: 'username'
                    },
                    {
                        model: Comment,
                        attributes: ['id', 'comment_title', 'comment_content', 'comment_writer', 'comment_date']
                    }
                ]
            }
        )
        res.status(200).json(somePosts);
    }
    catch(err) {
        res.status(500).json(err);
        console.log(err);
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