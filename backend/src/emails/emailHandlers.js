
import { Resend } from "resend";
import { createWelcomeEmailTemplate } from "./emailTemplate.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendWelcomeEmail = async (email, name) => {
  const { data, error } = await resend.emails.send({
    from: `${process.env.EMAIL_FROM_NAME} <${process.env.EMAIL_FROM}>`,
    to: email,
    subject: "Welcome to Chatify!",
    html: createWelcomeEmailTemplate(name, process.env.CLIENT_URL),
  });

  if (error) {
    console.error("Error sending welcome email:", error);
  }

  return data;
};