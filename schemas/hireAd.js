const Joi = require('joi');

const jobProviderSchema = {
	get: Joi.object({}),
	create: Joi.object({
		title: Joi.string().required(),
		description: Joi.string().required(),
		salary: Joi.object({
			min: Joi.number(),
			max: Joi.number()
		})
	})
};

module.exports = jobProviderSchema;
