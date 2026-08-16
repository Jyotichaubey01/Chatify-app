import express from "express";
<<<<<<< HEAD
import {
  getAllContacts,
  getChatPartners,
  getMessagesByUserId,
  sendMessage,
} from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();

// the middlewares execute in order - so requests get rate-limited first, then authenticated.
// this is actually more efficient since unauthenticated requests get blocked by rate limiting before hitting the auth middleware.
router.use(arcjetProtection, protectRoute);

router.get("/contacts", getAllContacts);
router.get("/chats", getChatPartners);
router.get("/:id", getMessagesByUserId);
router.post("/send/:id", sendMessage);

export default router;
=======

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
>>>>>>> 360e461de6e13952d0068b0fa2ea4f116c3e68e1
