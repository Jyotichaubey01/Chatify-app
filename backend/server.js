
import express from "express";

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

// Start server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

