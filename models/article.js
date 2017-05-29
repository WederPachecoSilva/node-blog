const mongoose = require('mongoose');

// article schema
let articleSchema = mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
});

// Creates article model
let Article = mongoose.model('Articles', articleSchema);

// Exports the model
module.exports = Article;
