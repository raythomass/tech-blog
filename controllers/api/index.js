const router = require('express').Router();
const BlogPostRoutes = require('./blogpost-routes');
const CommentRoutes = require('./comment-routes');
const UserRoutes = require('./user-routes');

router.use('/blogpost', BlogPostRoutes);
router.use('/comments', CommentRoutes);
router.use('/user', UserRoutes);

module.exports = router;