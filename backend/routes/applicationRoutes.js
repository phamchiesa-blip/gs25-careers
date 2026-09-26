import express from "express";
import { submitApplication } from "../controllers/applicationController.js";

const router = express.Router();

// POST /api/applications -> Tiếp nhận đơn ứng tuyển từ 6 form
router.post("/", submitApplication);

export default router;
