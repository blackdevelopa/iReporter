import chai from 'chai';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

const server = require('../server/app');
const should = chai.should();

//Test Home Route
describe('/GET home route', () => {
  it('should GET home page', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
				res.should.have.status(200);
        done();
      });
  });
});
