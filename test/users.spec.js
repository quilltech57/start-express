const chai = require('chai');
const chaiHttp = require('chai-http');

const server = require('../server');

chai.should();
chai.use(chaiHttp);

describe('GET Users', () => {
  describe('GET /api/v1/users', () => {
    let res;
    before(async () => {
      res = await chai.request(server).get('/api/v1/users');
    });
    it('Should get root api', () => {
      res.should.have.status(200);
    });
    it('Should have property `status` of success', () => {
      res.body.should.have.property('status').eq('success');
    });
  });

  // Modify below code to your test pattern
  describe('POST /api/v1/users', () => {
    // 	let res = undefined;
    // 	before(async () => {
    // 		res = await chai.request(server).get("/api/v1/users");
    // 	});
    // 	it("Should get root api", () => {
    // 		res.should.have.status(200);
    // 	});
    // 	it("Should have property `status` of success", () => {
    // 		res.body.should.have.property("status").eq("success");
    // 	});
  });
});
