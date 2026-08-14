const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const loginAdmin = async (email, password) => {
  const admin = await Admin.findOne({
    email: email.toLowerCase()
  }).select("+password");

  if (!admin) {
    throw new Error("Invalid email or password");
  }

  if (!admin.active) {
    throw new Error("Admin account is inactive");
  }

  const passwordMatch = await bcrypt.compare(
    password,
    admin.password
  );

  if (!passwordMatch) {
    throw new Error("Invalid email or password");
  }

  admin.lastLogin = new Date();

  await admin.save();

  const token = jwt.sign(
    {
      id: admin._id,
      role: admin.role
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "7d"
    }
  );

  return {
    token,
    admin: {
      id: admin._id,
      name: admin.name,
      email: admin.email,
      role: admin.role
    }
  };
};

const getAdminById = async (id) => {
  return await Admin.findById(id).select(
    "-password"
  );
};

module.exports = {
  loginAdmin,
  getAdminById
};