const Joi = require('joi');

const jobProviderSchema = {
	get: Joi.object({
		userID: Joi.string()
	}),
	create: Joi.object({
		firstName: Joi.string()
			.min(2)
			.max(30)
			.required(),
		lastName: Joi.string()
			.min(2)
			.max(30)
			.required(),
		email: Joi.string()
			.email()
			.required(),
		password: Joi.string().required()
	})
};

module.exports = jobProviderSchema;
