import express from "express";
<<<<<<< HEAD
import { signup, login, logout, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();

router.use(arcjetProtection);

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile", protectRoute, updateProfile);

router.get("/check", protectRoute, (req, res) => res.status(200).json(req.user));

export default router;
=======
import { signup, login, logout } from "../controllers/auth.controller.js";

const router = express.Router();

// Signup
router.post("/signup", signup);

// Login
router.post("/login", login);

// Logout
router.post("/logout", logout);

export default router;
>>>>>>> 360e461de6e13952d0068b0fa2ea4f116c3e68e1
