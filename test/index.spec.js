const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../server');

chai.should();
chai.use(chaiHttp);

describe('GET Fetch index of API', () => {
  describe('GET /api/v1', () => {
    let res;
    before(async () => {
      res = await chai.request(server).get('/api/v1');
    });
    it('Should get root api', () => {
      res.should.have.status(200);
    });
    it('Should have property `status` of success', () => {
      res.body.should.have.property('status').eq('success');
    });
  });
});
