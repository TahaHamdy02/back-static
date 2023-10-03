const errorLogger = require("../services/errorLogger.Service");

function errorHandler(err, req, res, next) {
  errorLogger.error(err.message);
  res.status(500).json({ success: false, error: 'Server error!!!' });
}

module.exports = errorHandler;