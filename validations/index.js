module.exports = {
	phone: require('./phone'),
	email: require('./email'),
	url: require('./url'),
	validate(validation, value) {
		return this[validation](value);
	}
};
