import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

console.log("EMAIL:", process.env.EMPLOYER_EMAIL);
console.log(
  "PASSWORD LENGTH:",
  process.env.EMPLOYER_EMAIL_PASSWORD?.length
);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMPLOYER_EMAIL,
    pass: process.env.EMPLOYER_EMAIL_PASSWORD,
  },
});

export default transporter;