import chai from 'chai';
import chaiHttp from 'chai-http';
const expect = require('chai').expect;

chai.use(chaiHttp);

const app = require('../server/app');
const should = chai.should();

//Test Home Route
describe('/GET home route', () => {
  it('should GET home page', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
				res.should.have.status(200);
				res.should.be.json;
        done();
      });
  });
});

describe('GET /api/v1/interventions', () => {
  it('should GET all interventions', (done) => {
    chai.request(app)
      .get('/api/v1/interventions')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        done();
      });
  });
});

describe('GET /api/v1/redflags', () => {
  it('should GET specifc redflags', (done) => {
    chai.request(app)
      .get('/api/v1/redflags')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        done();
      });
  });
});
