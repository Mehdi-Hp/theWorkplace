const mongoose = require('mongoose');
const userModel = require('./UserModel');
const validators = require('../validations');

const JobFinder = userModel.discriminator(
	'JobFinder',
	new mongoose.Schema({
		appliedJobs: new mongoose.Schema({
			jobID: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Job'
			},
			currentStep: {
				type: Number
			}
		}),
		skills: {
			type: Array
		},
		homeLocation: {
			type: String
		},
		socials: new mongoose.Schema({
			name: {
				type: String
			},
			link: {
				type: String,
				validator(value) {
					return validators.validate('url', value);
				},
				message: (props) => {
					return `${props.value} is not a valid URL!`;
				}
			}
		}),
		preferredContactType: {
			type: String,
			enum: ['phone', 'email']
		}
	})
);

module.exports = JobFinder;
