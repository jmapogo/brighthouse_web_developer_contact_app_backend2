
describe('ContactService Tests', function() {

  var contactService;

  beforeEach(function() {
    contactService = require('../../../../app/services/contacts/contact-service');
  });

  describe('lookupContact', function() {

    it('should be a function', function(done) {
      expect(contactService.lookupContact).to.be.a('function');
      done();
    });

  });
});
