const BusinessSettings = require("../models/BusinessSettings");

const getBusinessSettings = async () => {
  return await BusinessSettings.findOne();
};

const createBusinessSettings = async (settingsData) => {
  return await BusinessSettings.create(settingsData);
};

const updateBusinessSettings = async (settingsData) => {
  return await BusinessSettings.findOneAndUpdate(
    {},
    settingsData,
    {
      new: true,
      runValidators: true,
      upsert: true
    }
  );
};

module.exports = {
  getBusinessSettings,
  createBusinessSettings,
  updateBusinessSettings
};