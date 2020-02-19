// Test för server.js
const supertest = require('supertest')
const { app, port } = require('../src/server') // hämtar in app och port från server.js

describe('Simple test, doest it work?', () => { // Huvudrubrik till våra test
    let server

    beforeEach(() => {                          // beforeEach körs innan varje 'it' test
        server = app.listen(port, () => console.log('                  >>>>>>>>>>>> Testing server up')) // servern körs igång
    })

    it('Should respond to /', (done) => {       // Ett test för att se om servern svarar på get /
        supertest(server).get('/').expect(200, done);   // vi testar om vi får svar på /
    })

    afterEach((done) => {                       // afterEach körs efter varje 'it' test
        server.close(done)                          // servern stängs
    })
})