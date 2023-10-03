const morgan = require('morgan')
const json = require('morgan-json');
const { v4: uuidv4 } = require('uuid');
const infoLogger = require('./infoLogger.Service')
const format = json({
  id:':id',
  method: ':method',
  url: ':url',
  status: ':status',
  contentLength: ':res[content-length]',
  responseTime: ':response-time',
  req:":req"
})
morgan.token("id", ()=>uuidv4())
morgan.token("req", (req,res)=>JSON.stringify(req.body))
const httpLogger = morgan(format, {
  stream: {
    write: (message) => {
      const {
        method,
        url,
        status,
        contentLength,
        responseTime,
        id,
        req
      } = JSON.parse(message)

      infoLogger.info('HTTP Access Log', {
        timestamp: new Date().toString(),
        id,
        method,
        url,
        status: Number(status),
        contentLength,
        responseTime: Number(responseTime),
        req
      })
    }
  }
})

module.exports = httpLogger