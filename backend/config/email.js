import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMPLOYER_EMAIL,
    pass: process.env.EMPLOYER_EMAIL_PASSWORD,
  },
});

export default transporter;
