const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const Admin = require("../models/Admin");

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    const existingAdmin = await Admin.findOne({
      email: "admin@mrbean.com"
    });

    if (existingAdmin) {
      console.log("Admin already exists");

      await mongoose.connection.close();

      process.exit(0);
    }

    const hashedPassword =
      await bcrypt.hash(
        "ChangeMe123!",
        12
      );

    await Admin.create({
      name: "MrBean Admin",
      email: "admin@mrbean.com",
      password: hashedPassword,
      role: "superadmin",
      active: true
    });

    console.log(
      "Admin account created successfully"
    );

    console.log(
      "Email: admin@mrbean.com"
    );

    console.log(
      "Password: ChangeMe123!"
    );

    await mongoose.connection.close();

    console.log("Database connection closed");

    process.exit(0);
  } catch (error) {
    console.error(
      `Admin seeding failed: ${error.message}`
    );

    process.exit(1);
  }
};

seedAdmin();