const express = require('express');
const app = express();
const errorHandler = require('../middleware/error.Middleware');
const httpLogger = require('../services/httpLogger.service');
app.use(express.json());
app.use(httpLogger);
app.get('/', (req, res, next) => {
  try {
    throw new Error('Something failed!');
  } catch (err) {
    next(err);
  }
});

app.use(errorHandler);

module.exports = app;