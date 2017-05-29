const router = require('express').Router();
let Article = require('../models/article');

router.get('/', (req, res) => {
  Article.find({}, (err, articles) => {
    if (err) {
      console.log(err);
    } else {
      res.render('index', {
        title: "Articles",
        articles: articles
      });
    }
  });
});

module.exports = router;
