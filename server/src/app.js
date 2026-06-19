import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import admissionRoutes from "./routes/admissionRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import noticeRoutes from "./routes/noticeRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_URL?.split(",") || "http://localhost:5173",
    credentials: true
  })
);
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.get("/", (req, res) => {
  res.json({ message: "Kanya Vidyalay Manerajuri API is running." });
});

app.use("/api/auth", authRoutes);
app.use("/api/admissions", admissionRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/notices", noticeRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
