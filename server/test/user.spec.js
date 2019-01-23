import 'babel-polyfill';
import chai from 'chai';
import chaiHttp from 'chai-http';
import faker from 'faker';
import app from '../app';

const { expect } = chai;

chai.use(chaiHttp);

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
