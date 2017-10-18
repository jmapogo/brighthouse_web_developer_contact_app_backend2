var ContactModel = require('../../models/contacts/Contact.js');
var _ = require('lodash');
function ContactsRepository() {}

function getContactsData(req, res, next) {
	var id;
	if (typeof req.params !== "undefined")
		id = req.params.contactid;
	var where = {};
	if (typeof id !== "undefined") {
		where = {
			_id: id
		}
	} else if (req.query !== {}) { // only filter when loading a collection
		var keys = [];
		if (typeof req.query !== "undefined")
			keys = Object.keys(req.query);
		for (var i = 0; i < keys.length; i++)
			where[keys[i]] = new RegExp(req.query[keys[i]], 'i');

	}

	ContactModel.find(where, function (err, contacts) {
		var tmpContact = _.map(contacts, function (contact) {
				return {
					_id: contact._id,
					name: contact.name,
					middle_name: contact.middle_name,
					last_name: contact.last_name,
					gender: contact.gender,
					email: contact.email,
					contact_cell_number: contact.contact_cell_number,
					contact_cell_number_alt: contact.contact_cell_number_alt,
					address_building: contact.address_building,
					address_street: contact.address_street,
					address_area: contact.address_area,
					address_postal_code: contact.address_postal_code,
					address_city: contact.address_city,
					address_province: contact.address_province
				}
			});

		res.status(200).json(tmpContact);
	});
}
function saveContactsData(req, res, next) {
	var ContactData = req.body;

	var contact = new ContactModel(ContactData);

	contact.save().then(function (doc) {
		res.status(200).json(doc);
	});

}
function updateContactsData(req, res, next) {
	var id = req.params.contactid;
	var ContactData = req.body;

	ContactModel.findOneAndUpdate({
		_id: id
	}, ContactData, {
		new: true
	}, function (err, doc) {
		res.status(200).json(doc);
	});
}

function removeContactsData(req, res, next) {
	var id = req.params.contactid;
	var ContactData = req.body;

	ContactModel.findByIdAndRemove({
		_id: id
	}, function (err) {
		res.status(200).json({
			"message": "ok"
		});
	});
}

ContactsRepository.prototype = {
	getContactsData: getContactsData,
	saveContactsData: saveContactsData,
	updateContactsData: updateContactsData,
	removeContactsData: removeContactsData
};

var contactsRepository = new ContactsRepository();

module.exports = contactsRepository;
