const { BlogPost, Comment, User } = require('../../models');
const router = require('express').Router();

router.get('/', (req,res) => {
    try {
        const allUsers = User.findAll(
            {
                attributes: { exclude: 'password' }
            }
        )
        res.status(200).json(allUsers);
    }
    catch(err) {
        res.status(500).json(err);
    }
});

router.get('/:id', (req,res) => {
    try {
        const oneUser = User.findOne([
            {
                attributes: { exclude: 'password' },
                where: {
                    id: req.params.id
                }
            },
            {
                include: {
                    model: BlogPost,
                    attributes: ['id', 'title', 'content', 'writer', 'date']
                }
            }  
        ])
        res.status(200).json(oneUser)
    }
    catch(err) {
        res.status(500).json(err)
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