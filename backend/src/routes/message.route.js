import express from "express";

const router = express.Router();

// Get all messages
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Message endpoint is working",
  });
});

// Send a message
router.post("/", (req, res) => {
  res.status(201).json({
    success: true,
    message: "Message sent successfully",
    data: req.body,
  });
});

export default router;