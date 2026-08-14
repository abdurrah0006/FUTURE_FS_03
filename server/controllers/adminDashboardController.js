const {
  getDashboardStats
} = require("../services/adminDashboardService");

const getDashboardStatsController = async (
  req,
  res
) => {
  try {
    const stats = await getDashboardStats();

    res.status(200).json({
      success: true,
      data: stats
    });
  } catch (error) {
    console.error(
      "Get dashboard stats error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch dashboard statistics"
    });
  }
};

module.exports = {
  getDashboardStatsController
};