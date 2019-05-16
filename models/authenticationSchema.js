const mongoose = require('mongoose');
const validators = require('../validations/index');

const authenticationSchema = new mongoose.Schema(
	{
		local: new mongoose.Schema(
			{
				email: {
					type: String,
					validate: {
						validator(value) {
							return validators.validate('email', value);
						},
						message: (props) => {
							return `${props.value} is not a valid email!`;
						}
					},
					required: [true, 'Email is required']
				},
				password: {
					type: String,
					select: false,
					required: [true, 'Password is required']
				}
			},
			{ _id: false }
		)
	},
	{ _id: false }
);

module.exports = authenticationSchema;
