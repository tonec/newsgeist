const errors = require('restify-errors')
const Todo = require('../../models/todo')
const logger = require('../../utils/logger')

const MODULE_ID = 'api:hello'

module.exports = (req, res, next) => {
  logger.info('%s: request received', MODULE_ID)

  Todo.apiQuery(req.params, (err, docs) => {
    if (err) {
      console.error(err)
      return next(
        new errors.InvalidContentError(err.errors.name.message)
      )
    }

    res.send(docs)
    next()
  })

  logger.info('%s: response sent', MODULE_ID)

  return next()
}
