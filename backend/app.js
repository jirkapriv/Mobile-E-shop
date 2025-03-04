const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

// Mongoose  Connect
const mongoose = require('mongoose');
mongoose
  .connect(process.env.DB_NAME)
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.error('Database connection error: ', err);
  });

// Routes
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let productsRouter = require('./routes/products');

let app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Set up routes
app.use('/ds', indexRouter);
app.use('/users', usersRouter);
app.use('/', productsRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // Only show stack trace in development
  res.status(err.status || 500);
  res.json({ error: 'Internal Server Error' }); // For production, we return a generic error message
});

module.exports = app;
