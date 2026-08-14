const {
  loginAdmin,
  getAdminById
} = require("../services/adminAuthService");

const loginAdminController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required"
      });
    }

    const result = await loginAdmin(
      email,
      password
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: result
    });
  } catch (error) {
    console.error("Admin login error:", error);

    res.status(401).json({
      success: false,
      message: error.message
    });
  }
};

const getCurrentAdminController = async (
  req,
  res
) => {
  try {
    const admin = await getAdminById(
      req.admin.id
    );

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found"
      });
    }

    res.status(200).json({
      success: true,
      data: admin
    });
  } catch (error) {
    console.error(
      "Get current admin error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch admin"
    });
  }
};

module.exports = {
  loginAdminController,
  getCurrentAdminController
};