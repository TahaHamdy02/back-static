const winston = require('winston')

const options = {
  file: {
    level: 'error',
    filename: 'src/logs/error.log',
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: true,
  },
  console: {
    level: 'error',
    handleExceptions: true,
    json: false,
    colorize: false,
  },
};

const errorLogger = winston.createLogger({
  levels: winston.config.npm.levels,
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
  ],
  exitOnError: false
})

module.exports = errorLogger