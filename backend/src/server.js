import "dotenv/config";
import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import express from "express";
import connectDB from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";

const app = express();

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Chatify Backend is Running 🚀");
});

// Auth routes (signup, login, logout)
app.use("/api/auth", authRoutes);

// Start server
app.listen(3000, async () => {
  console.log("Server running on port 3000");
  await connectDB();
});