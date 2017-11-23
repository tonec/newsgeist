var supertest = require('supertest')
var app = require('../')

module.exports = supertest(app)
