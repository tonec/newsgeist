module.exports = (server) => {
  // unprotected routes
  require('./ping')(server)
  require('./threads')(server)
}
