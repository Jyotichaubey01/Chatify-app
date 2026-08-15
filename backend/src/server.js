import "dotenv/config";
import dns from "dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);
import express from "express";
import connectDB from "./lib/db.js";

const app = express();

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Chatify Backend is Running 🚀");
});

// Signup
app.get("/api/auth/signup", (req, res) => {
  res.send("Signup endpoint");
});

// Login
app.get("/api/auth/login", (req, res) => {
  res.send("Login endpoint");
});

// Logout
app.get("/api/auth/logout", (req, res) => {
  res.send("Logout endpoint");
});

// Update
app.get("/api/auth/update", (req, res) => {
  res.send("Update endpoint");
});

// Start server
app.listen(3000, async () => {
  console.log("Server running on port 3000");
  await connectDB();
});