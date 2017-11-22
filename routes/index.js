module.exports = (server) => {
  // unprotected routes
  require('./ping')(server)
}
