const bcrypt = require('bcrypt');

module.exports = {
	async hash(password) {
		const salt = await bcrypt.genSalt(10);
		return bcrypt.hash(password, salt);
	},
	async match(firstPassword, secondPassword) {
		return bcrypt.compare(firstPassword, secondPassword);
	}
};
