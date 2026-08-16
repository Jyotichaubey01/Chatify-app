<<<<<<< HEAD
import { Resend } from "resend";
import { ENV } from "./env.js";

export const resendClient = new Resend(ENV.RESEND_API_KEY);

export const sender = {
  email: ENV.EMAIL_FROM,
  name: ENV.EMAIL_FROM_NAME,
};
=======

import {Resend} from 'resend';

import 'dotenv/config';



export const resendClint = new Resend(process.env.RESEND_API_KEY);

export const sender = {
    email: process.env.EMAIL_FROM,
    name: process.env.EMAIL_FROM_NAME

};
>>>>>>> 360e461de6e13952d0068b0fa2ea4f116c3e68e1
