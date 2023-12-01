const { BlogPost, Comment, User } = require('../../models');
const router = require('express').Router();

router.get('/', (req,res) => {
    try {
        const allComments = Comment.findAll(
            {
                attributes: ['id','comment_title','comment_content','comment_writer','comment_date'],
                include: {
                    model: User,
                    key: 'username'
                }
            }
        );
    }
    catch {
        
    }
});

module.exports = router;