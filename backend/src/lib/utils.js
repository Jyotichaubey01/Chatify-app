import jwt from "jsonwebtoken";
<<<<<<< HEAD
import { ENV } from "./env.js";

export const generateToken = (userId, res) => {
  const { JWT_SECRET } = ENV;
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }

  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // MS
    httpOnly: true, // prevent XSS attacks: cross-site scripting
    sameSite: "strict", // CSRF attacks
    secure: ENV.NODE_ENV === "development" ? false : true,
  });

  return token;
};

// http://localhost
// https://dsmakmk.com
=======

export const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in ms
        httpOnly: true,                  // prevents XSS attacks: cookie can't be accessed via client-side JS
        sameSite: "strict",              // prevents CSRF attacks
        secure: process.env.NODE_ENV !== "development", // only send over HTTPS in production
    });

    return token;
};
>>>>>>> 360e461de6e13952d0068b0fa2ea4f116c3e68e1
