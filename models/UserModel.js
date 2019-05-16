const mongoose = require('mongoose');
const validators = require('../validations');
const authenticationSchema = require('./authenticationSchema');

const userSchema = mongoose.Schema({
	firstName: {
		type: String
	},
	lastName: {
		type: String,
		required: [true, 'User last name is required']
	},
	description: {
		type: String
	},
	phone: {
		type: String,
		validate: {
			validator(value) {
				return validators.validate('phone', value);
			},
			message: (props) => {
				return `${props.value} is not a valid phone number!`;
			}
		}
	},
	gender: {
		type: String,
		enum: ['male', 'female', 'other']
	},
	birthday: {
		type: Date
	},
	jobTitle: {
		type: String
	},
	authentication: authenticationSchema
});

const User = mongoose.model('User', userSchema);
module.exports = User;
