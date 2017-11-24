const expect = require('chai').expect
const apiserver = require('../../test/server')
const headers = require('../../test/headers')

describe('ROUTE: /api/threads', () => {
  it('should failt with a 401 without jwt token', (done) => {
    apiserver
      .get('/api/threads')
      .expect('Content-type', /json/)
      .expect(401)
      .end((err, res) => {
        if (err) {
          console.log(err.message)
          return done(new Error('Supertest encountered an error'))
        }

        expect(res.body.error).to.be.undefined

        done()
      })
  })

  it('should work with jwt token', (done) => {
    apiserver
      .get('/api/threads')
      .set('Authorization', headers.Authorization)
      .expect('Content-type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          console.log(err.message)
          return done(new Error('Supertest encountered an error'))
        }

        expect(res.body.error).to.be.undefined

        done()
      })
  })
})
