<<<<<<< HEAD
import { resendClient, sender } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "../emails/emailTemplates.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
  const { data, error } = await resendClient.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: email,
    subject: "Welcome to Chatify!",
    html: createWelcomeEmailTemplate(name, clientURL),
=======

import { Resend } from "resend";
import { createWelcomeEmailTemplate } from "./emailTemplate.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendWelcomeEmail = async (email, name) => {
  const { data, error } = await resend.emails.send({
    from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM}>`,
    to: email,
    subject: "Welcome to Chatify!",
    html: createWelcomeEmailTemplate(name, process.env.CLIENT_URL),
>>>>>>> 360e461de6e13952d0068b0fa2ea4f116c3e68e1
  });

  if (error) {
    console.error("Error sending welcome email:", error);
<<<<<<< HEAD
    throw new Error("Failed to send welcome email");
  }

  console.log("Welcome Email sent successfully", data);
};
=======
  }

  return data;
};
>>>>>>> 360e461de6e13952d0068b0fa2ea4f116c3e68e1
