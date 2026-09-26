import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: String,
      required: true,
      trim: true,
    },
    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    idCard: {
      type: String,
      default: null,
      trim: true,
    },
    birthday: {
      type: String,
      default: null,
    },
    sex: {
      type: String,
      default: null,
    },
    hasOriginalId: {
      type: String,
      default: null,
    },
    education: {
      type: String,
      default: null,
    },
    workingArea: {
      type: String,
      default: null,
      trim: true,
    },
    shift: {
      type: String,
      default: null,
    },
    startDate: {
      type: String,
      default: null,
    },
    expectedSalary: {
      type: String,
      default: null,
    },
    cvFile: {
      name: { type: String, default: null },
      type: { type: String, default: null },
      size: { type: Number, default: null },
      content: { type: String, default: null }, // base64 data if available
    },
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.model("Application", applicationSchema);

export default Application;
