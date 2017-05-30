const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config');
const bodyParser = require('body-parser');

// Connect and treat db connection error
let db = require('./db');

let articlesRouter = require('./routes/articles');
let indexRouter = require('./routes/index');

// Init express
const app = express();

// Bring in article model
let Article = require('./models/article');

//Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Setting routes
app.use(indexRouter);
app.use('/articles', articlesRouter);

//Start Server
app.listen(config.PORT, () => console.log(`Server running on port ${config.PORT}`));
