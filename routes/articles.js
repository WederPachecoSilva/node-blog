const router = require('express').Router();
const Article = require('../models/article');
const bodyParser = require('body-parser');

router.get('/add', (req, res) => {
  res.render('add_article', {title: "Add Article"});
});

router.post('/add', (req, res) => {
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

router.get('/:id', (req, res) => {
  let _id = req.params.id;
  Article.findById(_id, (err, article) => {
    if (err) {
      throw err;
    } else {
      res.render('article', {article});
    }
  });
});

module.exports = router;
