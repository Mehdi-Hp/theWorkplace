const phoneValidator = require('./phone');

describe('validate phone number structure', () => {
	it('should return true if phone number is correct', () => {
		expect(phoneValidator('+989035421212')).toBeTruthy();
		expect(phoneValidator('09035421212')).toBeTruthy();
	});
	it('should return false if phone number is incorrect', () => {
		expect(phoneValidator('+98903542121')).toBeFalsy();
		expect(phoneValidator('0903542121')).toBeFalsy();
		expect(phoneValidator('903542121')).toBeFalsy();
	});
});
