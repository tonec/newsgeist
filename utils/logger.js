const { createLogger, transports } = require('winston')
const config = require('../config')

const logger = createLogger({
  level: config.LOG_LEVEL,
  transports: [
    new transports.Console({
      silent: false,
      timestamp: true,
      colorize: true
    })
  ],
  exitOnError: false
})

module.exports = logger

logger.debug('util:logger: initialized.')
logger.info('util:logger: ENV LOG_LEVEL =', process.env.LOG_LEVEL || 'info')
