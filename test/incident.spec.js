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

describe('GET interventions', () => {
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

describe('GET redflags', () => {
  it('should GET all redflags', (done) => {
    chai.request(app)
      .get('/api/v1/redflags')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        done();
      });
  });
});


describe('GET redflag by id', () => {
  it('should GET a redflag', (done) => {
    chai.request(app)
      .get('/api/v1/redflags/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        done();
      });
  });
});


describe('GET interventions by id', () => {
  it('should GET specifc interventions', (done) => {
    chai.request(app)
      .get('/api/v1/interventions/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        done();
      });
  });
});

describe('PATCH specific redflags location', () => {
  it('should PATCH specific redflags location', (done) => {
    chai.request(app)
      .patch('/api/v1/redflags/1/location')
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.json;
        done();
      });
  });
});

describe('PATCH specific interventions location', () => {
  it('should PATCH specific interventions location', (done) => {
    chai.request(app)
      .patch('/api/v1/interventions/2/location')
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.json;
        done();
      });
  });
});

describe('PATCH specific redflags comment', () => {
  it('should PATCH specific redflags comment', (done) => {
    chai.request(app)
      .patch('/api/v1/redflags/1/comment')
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.json;
        done();
      });
  });
});

describe('PATCH specific interventions comment', () => {
  it('should PATCH specific interventions comment', (done) => {
    chai.request(app)
      .patch('/api/v1/redflags/1/comment')
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.json;
        done();
      });
  });
});

describe('DELETE specific redflag', () => {
  it('should DELETE specific redflag', (done) => {
    chai.request(app)
      .delete('/api/v1/redflags/1')
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.json;
        done();
      });
  });
});

describe('DELETE specific intervention', () => {
  it('should DELETE specific intervention', (done) => {
    chai.request(app)
      .delete('/api/v1/interventions/1')
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.json;
        done();
      });
  });
});


describe('POST redflags', () => {
  it('should POST redflags', (done) => {
    chai.request(app)
      .post('/api/v1/redflags')
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.json;
        done();
      });
  });
});

describe('POST interventions', () => {
  it('should POST interventions', (done) => {
    chai.request(app)
      .post('/api/v1/interventions')
      .end((err, res) => {
        res.should.have.status(201);
        res.should.be.json;
        done();
      });
  });
});

