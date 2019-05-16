const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
	name: {
		type: {
			type: String
		}
	},
	address: {
		type: String,
		required: [true, 'Address is required']
	},
	location: new mongoose.Schema(
		{
			longtitude: {
				type: String,
				required: true
			},
			latitude: {
				type: String,
				required: true
			}
		},
		{
			_id: false
		}
	),
	numberOfEmployees: new mongoose.Schema(
		{
			min: Number,
			max: Number
		},
		{
			_id: false
		}
	),
	businessField: {
		type: String
	},
	nationality: {
		type: String,
		required: [true, 'Nationality is required']
	},
	establishmentYear: {
		type: Number
	},
	femalePercentage: {
		type: Number,
		required: [true, 'Female percentage is required']
	},
	hireAds: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'HireAd'
		}
	],
	employees: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'JobProvider'
		}
	]
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;
