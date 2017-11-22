
const API_ROOT = '/api'

module.exports = {
  LOG_LEVEL: process.env['LOG_LEVEL'] || 'info',
  PORT: process.env['PORT'] || '8080',
  JWT_SECRET: 'topcat',
  basePath: (path) => API_ROOT.replace(/\/$/, '') + '/' + path.replace(/^\//, '')
}
