const mongoose = require('mongoose');
const stepsSchema = require('./stepsSchema');

const hireAdSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Title is required']
	},
	description: {
		type: String,
		required: [true, 'Description is required']
	},
	salary: new mongoose.Schema(
		{
			min: Number,
			max: Number
		},
		{ _id: false }
	),
	companyID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'company'
	},
	creator: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'jobProvider'
	},
	applications: [
		{
			applierID: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'jobFinder'
			},
			applyDate: {
				type: Date
			}
		}
	],
	steps: [stepsSchema]
});

const HireAd = mongoose.model('HireAd', hireAdSchema);
module.exports = HireAd;
