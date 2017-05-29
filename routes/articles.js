const router = require('express').Router();

router.route('/add')
  .get((req, res, next) => {
    res.render('add_article', {
      title: "Add Article"
    });
    next();
  })
  .post((req, res, next) => {
    console.log('Submitted');
    res.redirect('/')
    next();
  });

module.exports = router;
