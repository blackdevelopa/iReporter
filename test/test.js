// 'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

const app = require('../server/app');

describe('Hello World Route', () => {
  it('Returns a 200 response', (done) => {
      chai.request(app)
          .get('/')
          .end((error, response) => {
              if (error) done(error);
              // Now let's check our response
              expect(response).to.have.status(200);
              done();
          });
  });
});

// describe('API endpoint /api/v1/redflags', function() {
//   it('should add new redflags', function() {
//     return chai.request(app)
//       .post('/api/v1/redflags')
//       // .send({
//       //   redflag: 'new'
//       // })
//       .then(function(res) {
//         expect(res).to.have.status(201);
//         // expect(res).to.be.json;
//         // expect(res.body).to.be.an('object');
//       });
//   });
// })