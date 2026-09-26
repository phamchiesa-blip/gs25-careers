import express from "express";
import {
  submitApplication,
  getApplications,
} from "../controllers/applicationController.js";

const router = express.Router();

// GET /api/applications -> Lấy danh sách đơn ứng tuyển
router.get("/", getApplications);

// POST /api/applications -> Tiếp nhận và lưu đơn ứng tuyển vào MongoDB
router.post("/", submitApplication);

export default router;
