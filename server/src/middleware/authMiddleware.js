import jwt from "jsonwebtoken";
import Admin from "../models/Admin.js";

export const protect = async (req, res, next) => {
  const header = req.headers.authorization;

  if (!header?.startsWith("Bearer ")) {
    res.status(401);
    return next(new Error("Authentication token missing."));
  }

  try {
    const token = header.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await Admin.findById(decoded.id).select("-password");

    if (!req.user) {
      res.status(401);
      return next(new Error("Admin account not found."));
    }

    next();
  } catch (error) {
    res.status(401);
    next(new Error("Invalid or expired token."));
  }
};
