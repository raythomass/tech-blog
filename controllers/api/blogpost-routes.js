const { BlogPost, Comment, User } = require('../../models');
const router = require('express').Router();

// router.get('/', (req,res) => {
//     try {
//         const allPosts = BlogPost.findAll(
//             {
//                 attributes: ['id', 'title', 'content', 'writer', 'date'],
//                 include: [
//                     {
//                         model: User,
//                         attributes: 'username'
//                     }, 
//                     {
//                         model: Comment,
//                         attributes: ['id', 'comment_title', 'comment_content', 'comment_writer', 'commment_date'],
//                         include: {
//                             attributes: 'username'
//                         }
//                     }
//                 ]
//             })
//             res.status(200).json(allPosts)
//     } 
//     catch(err) {
//         res.status(500).json(err);
//         console.log(err);
//     }
// });

// router.get('/', async (req, res) => {
//     try {
//       const blogPosts = await BlogPost.findAll();
  
//       res.render('/', { blogPosts });
//     } 
//     catch (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Failure' });
//     }
//   });

router.get('/', async (req,res) => {
  try {
      const allPosts = await BlogPost.findAll({})
      res.status(200).json(allPosts)
  }
  catch(err) {
      console.log(err)
      res.status(500).json(err)
  }
});

  router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const blogPost = await BlogPost.findByPk(id);

      res.render('/:id', { blogPost });
    } 
    catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failure' });
    }
  });

module.exports = router;