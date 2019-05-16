const urlValidator = require('./url');

describe('validate URL structure', () => {
	it('should return true if URL is correct', () => {
		expect(urlValidator('http://google.com')).toBeTruthy();
		expect(urlValidator('https://google.com')).toBeTruthy();
		expect(urlValidator('google.com')).toBeFalsy();
		expect(urlValidator('m.google.com')).toBeFalsy();
		expect(urlValidator('goo.gl')).toBeFalsy();
	});
	it('should return false if URL is incorrect', () => {
		expect(urlValidator('google')).toBeFalsy();
		expect(urlValidator('.com')).toBeFalsy();
		expect(urlValidator('')).toBeFalsy();
	});
});
