const mongoose = require('mongoose');

const stepsSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Title is required']
	},
	Description: {
		type: String
	},
	interviewers: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'JobProvider'
		}
	],
	sequenceNumber: {
		type: Number,
		required: [true, 'Sequence number is required']
	},
	occurrence: [
		{
			interviewee: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'JobFinder'
			},
			dueDate: {
				type: Date,
				required: [true, 'Expected due date is required']
			}
		}
	]
});

module.exports = stepsSchema;
