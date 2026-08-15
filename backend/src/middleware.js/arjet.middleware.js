import aj from "../lib/arcjet.js";
import { isSpoofedBot } from "@arcjet/inspect";

export const arcjetProtection = async (req, res, next) => {
  try {
    const decision = await aj.protect(req);

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res.status(429).json({ message: "Too many requests, please try again later." });
      }

      if (decision.reason.isBot()) {
        return res.status(403).json({ message: "Bot access denied." });
      }

      return res.status(403).json({ message: "Access denied by security policy." });
    }

    // Check for spoofed bots (e.g. fake Googlebot user-agent)
    if (decision.results.some(isSpoofedBot)) {
      return res.status(403).json({ message: "Spoofed bot detected." });
    }

    next();
  } catch (error) {
    console.log("Error in arcjet middleware:", error.message);
    next(error);
  }
};