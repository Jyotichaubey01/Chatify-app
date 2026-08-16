<<<<<<< HEAD
import arcjet, { shield, detectBot, slidingWindow } from "@arcjet/node";

import { ENV } from "./env.js";

const aj = arcjet({
  key: ENV.ARCJET_KEY,
  rules: [
    // Shield protects your app from common attacks e.g. SQL injection
    shield({ mode: "LIVE" }),
    // Create a bot detection rule
    detectBot({
      mode: "LIVE", // Blocks requests. Use "DRY_RUN" to log only
      // Block all bots except the following
      allow: [
        "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc
        // Uncomment to allow these other common bot categories
        // See the full list at https://arcjet.com/bot-list
        //"CATEGORY:MONITOR", // Uptime monitoring services
        //"CATEGORY:PREVIEW", // Link previews e.g. Slack, Discord
      ],
    }),
    // Create a token bucket rate limit. Other algorithms are supported.
    slidingWindow({
      mode: "LIVE", // Blocks requests. Use "DRY_RUN" to log only
      max: 100,
      interval: 60,
    }),
  ],
});

export default aj;
=======

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
>>>>>>> 360e461de6e13952d0068b0fa2ea4f116c3e68e1
