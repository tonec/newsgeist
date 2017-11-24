
const API_ROOT = '/api'
const DB_NAME = 'newsgeist'

module.exports = {
  LOG_LEVEL: process.env['LOG_LEVEL'] || 'info',
  PORT: process.env['PORT'] || '8080',
  JWT_SECRET: 'some-secret',
  basePath: (path) => API_ROOT.replace(/\/$/, '') + '/' + path.replace(/^\//, ''),
  db: {
    uri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/' + DB_NAME
  }
}
