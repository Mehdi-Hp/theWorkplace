const emailValidator = require('./email');

describe('validate email structure', () => {
	it('should return true if email is correct', () => {
		expect(emailValidator('mehdi.hoseinipajooh@gmail.com')).toBeTruthy();
		expect(emailValidator('mehdi@gmail.com')).toBeTruthy();
		expect(emailValidator('123email@outlook.com')).toBeTruthy();
	});
	it('should return false if email is incorrect', () => {
		expect(emailValidator('email.com')).toBeFalsy();
		expect(emailValidator('testingEmail@email')).toBeFalsy();
		expect(emailValidator('@gmail.com')).toBeFalsy();
	});
});
