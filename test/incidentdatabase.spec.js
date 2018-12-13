import chai from 'chai';
import chaiHttp from 'chai-http';
const expect = require('chai').expect;

chai.use(chaiHttp);

const app = require('../server/app');
const should = chai.should();


describe('/GET home route from database', () => {
  it('should GET home page', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
				res.should.have.status(200);
        res.should.be.json;
        res.should.be.an('object');
        done();
      });
  });
});

describe('/GET home route from database', () => {
  it('should an error response', (done) => {
    chai.request(app)
      .get('/*')
      .end((err, res) => {
				res.should.have.status(404);
        res.should.be.json;
        res.should.be.an('object');
        done();
      });
  });
});

// describe('/POST new red-flags to database', () => {
//   it('should post new red-flag', (done) => {
//     User.sync({ force : true })
//     chai.request(app)
//       .post('/api/v1/red-flags')
//       .send({
//         createdBy: 1,
//         type: 'redflag',
//         location: 'Lagos',
//         status: 'draft',
//         images: 'image',
//         videos: 'my vid',
//         comment: 'I like it here'
//       })
//       .end((err, res) => {
// 				res.should.have.status(201);
//         res.should.be.json;
//         res.should.be.an('object');
//         done();
//       });
//   });
// });

describe('/POST new red-flags to database', () => {
  it('should return an error', (done) => {
    chai.request(app)
      .post('/api/v1/red-flags')
      .end((err, res) => {
				res.should.have.status(400);
        res.should.be.json;
        done();
      });
  });
});
