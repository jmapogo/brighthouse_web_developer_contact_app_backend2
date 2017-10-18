var mongoose = require('mongoose');
var DBConfig = require('../../config/db-config.json');
var db = mongoose.connect(DBConfig.mongo_connection_string); 
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
		contactId: String,
		name: String,
		middle_name: String,
		last_name: String,
		gender: String,
		email: String,
		contact_cell_number: String,
		contact_cell_number_alt: String,
		address_building: String,
		address_street: String,
		address_area: String,
		address_postal_code: String,
		address_city: String,
		address_province: String
	}); 
mongoose.model('Contact', ContactSchema, 'Contacts'); 

var Contact = db.model('Contact');

module.exports = Contact;