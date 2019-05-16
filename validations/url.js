const validUrl = require('valid-url');

module.exports = (valueToTest) => {
	return validUrl.isUri(valueToTest);
};
