module.exports = (valueToTest) => {
	if (valueToTest[0] === '+') {
		return /\+989\d{9}/.test(valueToTest);
	}
	if (valueToTest[0] === '0') {
		return /09\d{9}/.test(valueToTest);
	}
	return false;
};
