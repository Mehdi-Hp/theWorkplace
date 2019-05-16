const Joi = require('joi');

const jobProviderSchema = {
	get: Joi.object({
		companyID: Joi.string()
	}),
	create: Joi.object({
		name: Joi.string().required(),
		address: Joi.string().required(),
		location: Joi.object({
			latitude: Joi.string().required(),
			longtitude: Joi.string().required()
		}).required(),
		numberOfEmployees: Joi.object({
			min: Joi.number().required(),
			max: Joi.number().required()
		}).required(),
		nationality: Joi.string().required(),
		establishmentYear: Joi.number().required(),
		femalePercentage: Joi.number().required()
	}),
	addEmployee: Joi.object({
		id: Joi.string().required()
	}),
	addHireAd: Joi.object({})
};

module.exports = jobProviderSchema;
