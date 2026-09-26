import express from "express";
import {
  testEmailConnection,
  sendTestEmail,
} from "../controllers/emailController.js";

const router = express.Router();

// GET /api/email/test -> Xác thực kết nối tới Gmail SMTP server
router.get("/test", testEmailConnection);

// POST /api/email/test -> Gửi email test thực tế
router.post("/test", sendTestEmail);

export default router;
