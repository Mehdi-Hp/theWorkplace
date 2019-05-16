const Boom = require('boom');
const HireAd = require('../models/HireAdModel');
const companyController = require('./company');

module.exports = {
	async list(companyID) {
		const company = await companyController.get(companyID);
		const { hireAds } = await company.populate('hireAds');
		return hireAds;
	},
	async create({ companyID, jobProviderID, hireAdData }) {
		const hireAd = new HireAd({
			...hireAdData
		});
		hireAd.creator = jobProviderID;
		hireAd.companyID = companyID;
		try {
			const company = await companyController.get(companyID);
			company.hireAds.push(hireAd._id);
			company.save();
			return hireAd.save();
		} catch (error) {
			return Boom.badImplementation(error);
		}
	}
};
