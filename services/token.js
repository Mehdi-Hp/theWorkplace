const jwt = require('jsonwebtoken');
const secretKey = require('../config/secretKey');

module.exports = {
	async create(user) {
		return jwt.sign(user, secretKey, { algorithm: 'HS256', expiresIn: '1w' });
	},
	async decode(token) {
		return this.verify(token, secretKey);
	},
	async verify(token) {
		try {
			return !!jwt.verify(token, secretKey);
		} catch (error) {
			throw new Error(error);
		}
	},
	async validate(decoded, request) {
		const isValid = decoded._id && decoded.authentication.local.email;
		return {
			isValid
		};
	}
};
