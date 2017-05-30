const router = require('express').Router();
const Article = require('../models/article');
const bodyParser = require('body-parser');

router
  .route('/add')
  .get((req, res) => {
    res.render('add_article', {title: "Add Article"});  
  })
  .post((req, res) => {
    let article = new Article();
    article.title = req.body.title;
    article.author = req.body.author;
    article.body = req.body.body;

    article.save((err) => {
      if (err) {
        console.log(err);
        return;
      } else {
        res.redirect('/');
      }
    });
  });

module.exports = router;
