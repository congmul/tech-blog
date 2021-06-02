const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

// get all posts for homepage
router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({
        include: [User],
      });
      
    //   console.log(postData);
      const posts = postData.map((post) =>{
        // getter - get DataValues / Option - plain : If set to true, included instances will be returned as plain objects
          console.log(post.get({ plain: true }));
          post.get({ plain: true })
    });
      res.render('all-posts', { posts });
    } catch (err) {
      res.status(500).json(err);
    }
  });



// get single post
router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          User,
          Comment
        //   {
        //     model: Comment,
        //     // include: [User],
        //   },
        ],
      });
      
      
      if (postData) {
        const post = postData.get({ plain: true });
        console.log(post);
        res.render('single-post', { post });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });



  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('signup');
  });

  module.exports = router;