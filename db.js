const mongoose = require('mongoose');
// Connect to db
mongoose.connect('mongodb://localhost/nodekb');
module.exports = db = mongoose.connection;

//check for db error
db.on('error', (error) => {
  console.log(error);
});

// check connection
db.once('open', () => {
  console.log('Connected to MongoDB');
});
