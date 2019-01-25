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
  email: 'Lourdes23@yahoo.com',
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

let token;
let adminToken;

describe('POST api/v1/auth/login', () => {
	it('should successfully login a user account if inputs are valid', (done) => {
		chai.request(app)
			.post('/api/v1/auth/login')
			.send(user)
			.end((err, res) => {
				if (err) done();
				token = res.body.data[0].token;
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
  it('should successfully login an admin account if inputs are valid', (done) => {
    chai.request(app)
      .post('/api/v1/auth/login')
      .send({
				email: 'Domingo_Frami15@hotmail.com',
        password: '12345'
			})
      .end((err, res) => {
        if (err) done();
        adminToken = res.body.data[0].token;
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

describe('POST api/v1/interventions', () => {
  it('should create a record if user input is valid', (done) => {
    chai.request(app)
      .post('/api/v1/interventions/')
      .set({ 'x-access-token': token })
      .send({
				location: 'Rivers',
				images: 'images',
        comment: 'his is an intervention'
      })
      .end((err, res) => {
				if (err) done();
				expect(res.body).to.be.an('object');
				expect(res.body).to.haveOwnProperty('data');
				expect(res.body.status).to.be.a('number');
				expect(res.body.status).to.be.equals(201);
        done();
      });
  });
});

describe('POST api/v1/interventions', () => {
  it('should fail if token is not available', (done) => {
    chai.request(app)
      .post('/api/v1/interventions/')
      .send({
				location: 'Rivers',
				images: 'images',
        comment: 'his is an intervention'
      })
      .end((err, res) => {
				if (err) done();
				expect(res.body).to.be.an('object');
				expect(res.body.status).to.be.a('number');
				expect(res.body.status).to.be.equals(400);
        expect(res.body.message).to.be.a('string');
        expect(res.body.message).to.equals('You are not authorized to view this route');
        done();
      });
  });
});

describe('GET api/v1/interventions', () => {
  it('should return all available interventions records', (done) => {
    chai.request(app)
			.get('/api/v1/interventions')
			.set({ 'x-access-token': token })
      .end((err, res) => {
        if (err) done();
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('data');
        expect(res.body.status).to.be.a('number');
        expect(res.body.status).to.be.equals(200);
        expect(res.body.data[0]).to.haveOwnProperty('id');
        done();
      });
  });
});

describe('GET api/v1/interventions/:id', () => {
  it('should return a intervention record with a specific id', (done) => {
    chai.request(app)
			.get('/api/v1/interventions/6')
			.set({ 'x-access-token': token })
      .end((err, res) => {
        if (err) done();
        expect(res.body).to.be.an('object');
        expect(res.body).to.haveOwnProperty('status' && 'data');
        expect(res.body.status).to.be.a('number');
        expect(res.body.status).to.be.equals(200);
        done();
      });
  });
});

describe('GET api/v1/interventions/:id', () => {
  it('should return a intervention record with a specific id', (done) => {
    chai.request(app)
			.get('/api/v1/interventions/0')
			.set({ 'x-access-token': token })
      .end((err, res) => {
        if (err) done();
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.be.a('number');
				expect(res.body.status).to.be.equals(400);
				expect(res.body.message).to.be.a('string');
        expect(res.body.message).to.equals('There is no intervention here');
        done();
      });
  });
});

describe('PATCH api/v1/interventions/:id/location', () => {
  it('should edit the location value of a record if it exists', (done) => {
    chai.request(app)
      .patch('/api/v1/interventions/6/location')
      .set({ 'x-access-token': token })
      .send({
        location: 'calabar',
      })
      .end((err, res) => {
        if (err) done();
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.be.a('number');
        expect(res.body.status).to.be.equals(200);
        expect(res.body).to.haveOwnProperty('data');
        expect(res.body.data[0]).to.haveOwnProperty('message');
				expect(res.body.data[0]).to.haveOwnProperty('id' && 'message');
				expect(res.body.data[0].message).to.equals('Updated intervention location');
        done();
      });
  });
});

describe('PATCH api/v1/interventions/:id/location', () => {
  it('should edit the location value of a record if it exists', (done) => {
    chai.request(app)
      .patch('/api/v1/interventions/0/location')
      .set({ 'x-access-token': token })
      .send({
        location: 'calabar',
      })
      .end((err, res) => {
        if (err) done();
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.be.a('number');
        expect(res.body.status).to.be.equals(400);
				expect(res.body.message).to.be.a('string');
        expect(res.body.message).to.equals('This intervention does not exist');
        done();
      });
  });
});

describe('PATCH api/v1/interventions/:id/comment', () => {
  it('should edit the comment value of a record if it exists', (done) => {
    chai.request(app)
      .patch('/api/v1/interventions/6/comment')
      .set({ 'x-access-token': token })
      .send({
        comment: 'calabar',
      })
      .end((err, res) => {
        if (err) done();
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.be.a('number');
        expect(res.body.status).to.be.equals(200);
        expect(res.body).to.haveOwnProperty('data');
        expect(res.body.data[0]).to.haveOwnProperty('message');
				expect(res.body.data[0]).to.haveOwnProperty('id' && 'message');
				expect(res.body.data[0].message).to.equals('Updated intervention comment');
        done();
      });
  });
});

describe('PATCH api/v1/interventions/:id/comment', () => {
  it('should edit the location value of a record if it exists', (done) => {
    chai.request(app)
      .patch('/api/v1/interventions/0/comment')
      .set({ 'x-access-token': token })
      .send({
        comment: 'calabar',
      })
      .end((err, res) => {
        if (err) done();
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.be.a('number');
        expect(res.body.status).to.be.equals(400);
				expect(res.body.message).to.be.a('string');
        expect(res.body.message).to.equals('This intervention does not exist');
        done();
      });
  });
});

describe('PATCH api/v1/interventions/:id/status', () => {
  it('should successfully change the status of a record is the user is an admin', (done) => {
    chai.request(app)
      .patch('/api/v1/interventions/6/status')
      .set({ 'x-access-token': adminToken })
      .send({
        status: 'resolved',
      })
      .end((err, res) => {
        if (err) done();
        expect(res.body).to.be.an('object');
        expect(res.body.status).to.be.a('number');
        expect(res.body.status).to.be.equals(200);
        expect(res.body).to.haveOwnProperty('data');
        expect(res.body.data[0].message).to.equals('Updated intervention record status');
        done();
      });
  });
});

describe('PATCH api/v1/interventions/:id/status', () => {
  it('should return a 401 error if the user is not an admin', (done) => {
    chai.request(app)
      .patch('/api/v1/interventions/2/status')
      .set({ 'x-access-token': token })
      .end((err, res) => {
        if (err) done();
				expect(res.body).to.be.an('object');
				expect(res.body).to.haveOwnProperty('status' && 'message');
        expect(res.body.status).to.be.a('number');
				expect(res.body.status).to.be.equals(400);
				expect(res.body.message).to.be.a('string');
        done();
      });
  });
});

describe('Delete api/v1/interventions/:id/', () => {
  it('should delete a record by id if it exists', (done) => {
    chai.request(app)
      .delete('/api/v1/interventions/0/')
      .set({ 'x-access-token': token })
      .end((err, res) => {
        if (err) done();
        const { body } = res;
        expect(body).to.be.an('object');
        expect(body.status).to.be.a('number');
        expect(body.status).to.be.equals(400);
				expect(body.message).to.be.equals('This intervention does not exist');
        done();
      });
  });
});