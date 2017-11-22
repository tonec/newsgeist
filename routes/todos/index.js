const errors = require('restify-errors')
const config = require('../../config')
const Todo = require('../../models/todo')

module.exports = (server) => {
  server.get({ path: config.basePath('/todos'),
    version: '1.0.0' }, require('./v1'))
}
