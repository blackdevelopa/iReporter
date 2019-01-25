import 'babel-polyfill';
import chai from 'chai';
import chaiHttp from 'chai-http';
import faker from 'faker';
import app from '../app';

const { expect } = chai;

chai.use(chaiHttp);

const user = {
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
  othernames: 'userother',
  email: faker.internet.email(),
  phoneNumber: '07012345678',
  username: 'syderfgtr',
  registered: faker.date.recent(),
  isAdmin: false,
  password: '12345'
};

const admin = {
  firstname: 'adminfirst',
  lastname: 'adminlast',
  othernames: 'adminother',
  email: 'admin1e@gmail.com',
  phoneNumber: '07012345678',
  username: 'adminname',
  registered: faker.date.recent(),
  isAdmin: true,
  password: '12345'
};


describe('POST api/v1/auth/signup', () => {
  it('should successfully create a user account if inputs are valid', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(user)
      .end((err, res) => {
        if (err) done();
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.be.a('number');
        expect(res.body.status).to.be.equals(201);
        expect(res.body.data[0]).to.haveOwnProperty('token');
        expect(res.body.data[0]).to.haveOwnProperty('user');
        expect(res.body.data[0].user).to.be.an('object');
        expect(res.body.data[0].token).to.be.a('string');
        done();
      });
  });
});

describe('POST api/v1/auth/signup', () => {
  it('should fail to create a user account if user account exists', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        othernames: 'userothersy',
        email: 'useyr1@gmail.com',
        phoneNumber: '07012345676',
        username: 'usernamessg',
        registered: faker.date.recent(),
        password: '12345',
        isadmin: false,
      })
      .end((err, res) => {
        if (err) done();
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.be.a('number');
        expect(res.body.status).to.be.equals(400);
        expect(res.body.message).to.be.a('string');
        expect(res.body.message).to.equals('This user already exists');
        done();
      });
  });
});

describe('POST api/v1/auth/login', () => {
  it('should successfully log a user account if inputs are valid', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send(user)
      .end((err, res) => {
        if (err) done();
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.be.a('number');
        expect(res.body.status).to.be.equals(200);
        expect(res.body.data[0]).to.haveOwnProperty('token');
        expect(res.body.data[0]).to.haveOwnProperty('user');
        expect(res.body.data[0].user).to.be.an('object');
        expect(res.body.data[0].token).to.be.a('string');
        done();
      });
  });
});

describe('POST api/v1/auth/login', () => {
  it('should successfully log a admin account if inputs are valid', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send({
        email: 'Domingo_Frami15@hotmail.com',
        password: '12345'
      })
      .end((err, res) => {
        if (err) done();
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.be.a('number');
        expect(res.body.status).to.be.equals(200);
        expect(res.body.data[0]).to.haveOwnProperty('token');
        expect(res.body.data[0]).to.haveOwnProperty('user');
        expect(res.body.data[0].user).to.be.an('object');
        expect(res.body.data[0].token).to.be.a('string');
        done();
      });
  });
});

describe('POST api/v1/auth/login', () => {
  it('should fail to login if details are invalid', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send({
        email: faker.internet.email(),
        password: faker.internet.password(),
      })
      .end((err, res) => {
        if (err) done();
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.be.a('number');
        expect(res.body.status).to.be.equals(400);
        expect(res.body.message).to.be.a('string');
        expect(res.body.message).to.equals('Email or Password is invalid');
        done();
      });
  });
});