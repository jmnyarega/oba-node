const chai = require("chai");
const chaiHttp = require("chai-http");

const { context } = require("../index");
const truncate = require("./truncate");
const { user } = require("./fixtures");

const { app, db: models } = context;

chai.use(chaiHttp);
chai.should();

describe("Auth", () => {
  before(async () => {
    await truncate(models);
  });

  describe("POST login", () => {
    it("should signup user", (done) => {
      chai
        .request(app)
        .post("/signup")
        .send(user)
        .end((_, res) => {
          res.body.message.should.eql("registration success");
          res.body.should.have.property("token");
          res.should.have.status(201);
          done();
        });
    });

    it("should login user", (done) => {
      chai
        .request(app)
        .post("/login")
        .send(user)
        .end((_, res) => {
          res.body.should.have.property("token");
          res.should.have.status(200);
          done();
        });
    });
  });
});
