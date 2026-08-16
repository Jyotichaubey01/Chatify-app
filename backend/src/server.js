<<<<<<< HEAD
import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import { app, server } from "./lib/socket.js";

const __dirname = path.resolve();

const PORT = ENV.PORT || 3000;

app.use(express.json({ limit: "5mb" })); // req.body
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// make ready for deployment
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

server.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
  connectDB();
=======
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
>>>>>>> 360e461de6e13952d0068b0fa2ea4f116c3e68e1
});