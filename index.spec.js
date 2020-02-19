const { app, port } = require('./index')
const supertest = require('supertest')

describe('', () => {
    it('', (done) => {
        supertest(app).get('/').expect(200, done)
    })
})