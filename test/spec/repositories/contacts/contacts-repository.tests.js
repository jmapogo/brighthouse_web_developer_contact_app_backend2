
describe('ContactsRepository Tests', function() {

  var contactsRepository;

  beforeEach(function() {
    contactsRepository = require('../../../../app/repositories/contacts/contacts-repository');
  });

  describe('getContactsData()', function() {

    it('should be a function', function(done) {
      expect(contactsRepository.getContactsData).to.be.a('function');
      done();
    });

  });
});
