import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./config/db.js";
import eventRoutes from "./routes/eventRoutes.js";
import venueRoutes from "./routes/venueRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5173" }));
app.use(express.json({ limit: "1mb" }));
app.use(morgan("dev"));

app.get("/api/health", (req, res) => res.json({ status: "ok", service: "genoa-golf-club-api" }));
app.use("/api/events", eventRoutes);
app.use("/api/venue-enquiries", venueRoutes);
app.use(errorHandler);

connectDB(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/genoa_golf_club")
  .then(() => {
    app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
  })
  .catch(err => {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  });
