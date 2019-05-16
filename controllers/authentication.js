const Boom = require('boom');
const userService = require('../services/userService');
const passwordService = require('../services/password');
const tokenService = require('../services/token');

const getUserWithPassword = async (email) => {
	const userWithPassword = await userService.getByEmail(email);
	if (!userWithPassword) {
		return Boom.notFound('User not found');
	}
	return userWithPassword;
};

module.exports = {
	async login({ email, password: claimedPassword }) {
		const userWithPassword = await getUserWithPassword(email);
		const actualPassword = userWithPassword.authentication.local.password;
		const isMatchedPassword = await passwordService.match(claimedPassword, actualPassword);
		if (isMatchedPassword) {
			const user = await userService.getByID(userWithPassword._id);
			return {
				...user,
				token: await tokenService.create(user)
			};
		}
		return Boom.unauthorized('invalid password');
	}
};
