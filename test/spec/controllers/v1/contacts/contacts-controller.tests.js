
describe('ContactsController Tests', function() {

  var contactsController;
  var req;
  var res;
  var next;

  beforeEach(function() {
    req = {};
    res = { status: function(code) { return { json: function(obj) {} }} };

    sinon.spy(res, "status");

    contactsController = require('../../../../../app/controllers/v1/contacts/contacts-controller');
  });

  describe('get()', function() {

    it('should be a function', function(done) {
      expect(contactsController.get).to.be.a('function');
      done();
    });

    it('should call res.status() one time', function(done) {
      contactsController.get(req, res, next);

      expect(res.status.callCount).to.equal(1);
      done();
    });

    it('should call res.status() with 200', function(done) {
        contactsController.get(req, res, next);

      expect(res.status.calledWith(200)).to.equal(true);
      done();
    });

  });
});
