import dotenv from "dotenv";
import Admin from "../models/Admin.js";
import { connectDB } from "../config/db.js";

dotenv.config();

const seedAdmin = async () => {
  await connectDB();

  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;
  const name = process.env.ADMIN_NAME || "School Admin";

  if (!email || !password) {
    throw new Error("ADMIN_EMAIL and ADMIN_PASSWORD are required.");
  }

  const existing = await Admin.findOne({ email });
  if (existing) {
    console.log("Admin already exists.");
    process.exit(0);
  }

  await Admin.create({ name, email, password });
  console.log(`Admin created: ${email}`);
  process.exit(0);
};

seedAdmin().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
