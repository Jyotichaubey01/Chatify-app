import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Port
const PORT = process.env.PORT || 3000;

// Test route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Chatify Backend is Running 🚀",
  });
});

// Authentication routes
app.use("/api/auth", authRoutes);

// Message routes
app.use("/api/message", messageRoutes);

// 404 route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Chatify Backend running on http://localhost:${PORT}`);
});