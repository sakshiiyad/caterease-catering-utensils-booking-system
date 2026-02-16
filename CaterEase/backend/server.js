import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/publicRoutes/authRoutes.js";
import bookingRoute from "./src/routes/privateRoutes/bookingRoutes.js";
import adminRoute from "./src/routes/privateRoutes/adminRoute.js";
import inventoryRoute from "./src/routes/privateRoutes/Inventory.js";

dotenv.config();

const app = express();

/* ---------- CONFIG ---------- */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ---------- MIDDLEWARE ---------- */
app.use(express.json());
app.use(cors()); // safe because same-origin after deploy

/* ---------- DB ---------- */
connectDB();

/* ---------- API ROUTES ---------- */
app.use("/auth", authRoutes);
app.use("/api", bookingRoute);
app.use("/api", adminRoute);
app.use("/api", inventoryRoute);

/* ---------- SERVE FRONTEND ---------- */
app.use(express.static(path.join(__dirname, "public")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


/* ---------- START SERVER ---------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
