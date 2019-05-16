const mongoose = require('mongoose');
const userModel = require('./UserModel');

const JobProviderSchema = userModel.discriminator('JobProvider', new mongoose.Schema({}));

module.exports = JobProviderSchema;
