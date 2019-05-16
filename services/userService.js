const JobProvider = require('../models/JobProviderModel');
const JobFinder = require('../models/JobFinderModel');
const User = require('../models/UserModel');
const passwordService = require('./password');
const token = require('./token');

const userToTypeMapper = {
	JobProvider() {
		return JobProvider;
	},
	JobFinder() {
		return JobFinder;
	}
};

const prepareUser = async ({ firstName, lastName, email, password }, type) => {
	const UserType = userToTypeMapper[type]();
	const user = new UserType();
	user.firstName = firstName;
	user.lastName = lastName;
	user.authentication = {
		local: {
			email,
			password: await passwordService.hash(password)
		}
	};
	return user;
};

const prepareSafeUser = (user) => {
	return {
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.authentication.local.email
	};
};

module.exports = {
	async create({ firstName, lastName, email, password }, type) {
		const userExists = await this.exists(email, type);
		if (!userExists) {
			const user = await prepareUser({ firstName, lastName, email, password }, type);
			const savedUser = await user.save();
			const safeUser = prepareSafeUser(savedUser);
			return {
				...safeUser,
				token: await token.create(safeUser)
			};
		}
		return {
			error: true,
			message: 'User already exists'
		};
	},
	async exists(email, type) {
		const userModel = userToTypeMapper[type]();
		const existedUser = await userModel
			.findOne({
				'authentication.local.email': email
			})
			.exec();
		return !!existedUser;
	},
	async getByID(userID, type) {
		const foundedUser = await User.findById(userID)
			.lean()
			.exec();
		return foundedUser;
	},
	async getByEmail(email, type) {
		const foundedUser = await User.findOne({
			'authentication.local.email': email
		})
			.select('+authentication.local.password')
			.lean()
			.exec();
		return foundedUser;
	}
};
