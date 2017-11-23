const errors = require('restify-errors')
const Thread = require('../../models/thread')
const logger = require('../../utils/logger')

const MODULE_ID = 'api:threads'

module.exports = (req, res, next) => {
  logger.info('%s: request received', MODULE_ID)

  Thread.apiQuery(req.params, (err, docs) => {
    if (err) {
      console.error('Error: ', err)
      return next(
        new errors.InvalidContentError(err.errors.name.message)
      )
    }

    res.send(docs)
    return next()
  })

  logger.info('%s: response sent', MODULE_ID)
}
