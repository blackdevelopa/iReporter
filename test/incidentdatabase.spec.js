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