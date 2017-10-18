var ContactRepository = require('../../../repositories/contacts/contacts-repository.js');

function ContactsController() {}

function get(req, res, next) { 
	  ContactRepository.getContactsData(req, res, next); 
}
function put(req, res, next) {
	  ContactRepository.updateContactsData(req, res, next); 
}
function delete_contact(req, res, next) { 
	ContactRepository.removeContactsData(req, res, next);
}
function post(req, res, next) {
	ContactRepository.saveContactsData(req, res, next);
}

ContactsController.prototype = {
	get: get,
	put: put,
	delete : delete_contact,
	post: post
};

var contactsController = new ContactsController();

module.exports = contactsController;
