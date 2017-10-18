
function ContactService() {
}

function lookupContact(id) {
  return { id: id };
}

ContactService.prototype = {
  lookupContact: lookupContact
};

var contactService = new ContactService();

module.exports = contactService;
