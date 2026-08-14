const {
  getBusinessSettings
} = require("../services/businessSettingsService");

const getBusinessSettingsController = async (
  req,
  res
) => {
  try {
    const settings = await getBusinessSettings();

    if (!settings) {
      return res.status(404).json({
        success: false,
        message: "Business settings not found"
      });
    }

    res.status(200).json({
      success: true,
      data: settings
    });
  } catch (error) {
    console.error(
      "Get business settings error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch business settings"
    });
  }
};

module.exports = {
  getBusinessSettingsController
};