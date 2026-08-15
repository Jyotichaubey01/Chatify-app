
import arcjet, { shield, detectBot, tokenBucket } from "@arcjet/node";
import { ENV } from "./env.js";

export const aj = arcjet({
  key: ENV.ARCJET_KEY,
  characteristics: ["ip.src"], // track requests by IP
  rules: [
    // Shield protects against common attacks e.g. SQL injection, XSS, CSRF attacks
    shield({ mode: "LIVE" }),

    // Bot detection - blocks automated clients, allows search engine crawlers
    detectBot({
      mode: "LIVE",
      allow: [
        "CATEGORY:SEARCH_ENGINE", // allow Google, Bing, etc.
        // Uncomment to allow other categories:
        // "CATEGORY:MONITOR",
        // "CATEGORY:PREVIEW",
      ],
    }),

    // Rate limiting - token bucket algorithm
    tokenBucket({
      mode: "LIVE",
      refillRate: 5, // tokens added per interval
      interval: 10, // interval in seconds
      capacity: 10, // max tokens in bucket
    }),
  ],
});