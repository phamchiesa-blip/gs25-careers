import Application from "../models/Application.js";

// Helper regex kiểm tra định dạng email
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Helper regex kiểm tra số điện thoại (9 đến 15 số, chấp nhận dấu +, khoảng cách, gạch nối)
const PHONE_REGEX = /^[0-9+() -]{9,15}$/;

/**
 * Map tên công việc mặc định theo jobId nếu frontend không truyền jobTitle
 */
const JOB_TITLE_MAP = {
  "nhan-vien-ban-hang-pt": "Nhân viên Bán hàng (Bán thời gian / Part-time)",
  "nhan-vien-ban-hang-ft": "Nhân viên Bán hàng (Toàn thời gian / Full-time)",
  "cua-hang-truong": "Cửa Hàng Trưởng (Store Manager)",
  "legal-manager": "Legal Manager (Business Partnering)",
  "qa-team-leader": "QA Team Leader",
  "mystery-shopper": "Cộng tác viên Part-time – Mystery Shopper (Khách hàng bí mật)",
};

/**
 * Controller xử lý tiếp nhận đơn ứng tuyển và lưu vào MongoDB Atlas
 * Route: POST /api/applications
 */
export const submitApplication = async (req, res) => {
  try {
    const {
      jobId,
      jobTitle: clientJobTitle,
      fullName,
      email,
      phone,
      birthday,
      sex,
      idCard,
      hasOriginalId,
      education,
      workingArea,
      shift,
      expectedSalary,
      startDate,
      cvFile,
    } = req.body;

    // 1. Xác định vị trí công việc
    const jobTitle =
      clientJobTitle ||
      JOB_TITLE_MAP[jobId] ||
      "Vị trí ứng tuyển tại GS25";

    // 2. Validate các field bắt buộc chung
    if (!fullName || typeof fullName !== "string" || !fullName.trim()) {
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập họ và tên của bạn.",
      });
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập địa chỉ email.",
      });
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Địa chỉ email không đúng định dạng (Ví dụ: example@gmail.com).",
      });
    }

    if (!phone || typeof phone !== "string" || !phone.trim()) {
      return res.status(400).json({
        success: false,
        message: "Vui lòng nhập số điện thoại liên hệ.",
      });
    }

    if (!PHONE_REGEX.test(phone.trim())) {
      return res.status(400).json({
        success: false,
        message: "Số điện thoại không hợp lệ. Vui lòng nhập từ 9 đến 12 chữ số.",
      });
    }

    // 3. Validate theo từng nhóm công việc
    const missingFields = [];

    // Nhóm 1: Nhân viên bán hàng (Part-time hoặc Full-time)
    if (jobId === "nhan-vien-ban-hang-pt" || jobId === "nhan-vien-ban-hang-ft") {
      if (!idCard?.trim()) missingFields.push("Số CCCD/CMND");
      if (!birthday?.trim()) missingFields.push("Ngày tháng năm sinh");
      if (!sex?.trim()) missingFields.push("Giới tính");
      if (!hasOriginalId?.trim()) missingFields.push("Tình trạng giữ bản gốc CMND/CCCD");
      if (!education?.trim()) missingFields.push("Trình độ học vấn");
      if (!workingArea?.trim()) missingFields.push("Khu vực muốn làm việc");
      if (!shift?.trim()) missingFields.push("Khả năng xoay ca");
      if (!startDate?.trim()) missingFields.push("Ngày sớm nhất có thể nhận việc");
    }

    // Nhóm 2: Cửa hàng trưởng (SMForm)
    if (jobId === "cua-hang-truong") {
      if (!idCard?.trim()) missingFields.push("Số CCCD/CMND");
      if (!hasOriginalId?.trim()) missingFields.push("Tình trạng giữ bản gốc CMND/CCCD");
      if (!education?.trim()) missingFields.push("Trình độ học vấn");
      if (!workingArea?.trim()) missingFields.push("Khu vực muốn làm việc");
      if (!expectedSalary?.trim()) missingFields.push("Mức lương mong muốn");
      if (!startDate?.trim()) missingFields.push("Ngày sớm nhất có thể nhận việc");
    }

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Vui lòng điền đầy đủ các thông tin bắt buộc: ${missingFields.join(", ")}.`,
        missingFields,
      });
    }

    // 4. Tạo document Application và lưu vào MongoDB Atlas
    const newApplication = await Application.create({
      jobId,
      jobTitle,
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      idCard: idCard?.trim() || null,
      birthday: birthday?.trim() || null,
      sex: sex?.trim() || null,
      hasOriginalId: hasOriginalId?.trim() || null,
      education: education?.trim() || null,
      workingArea: workingArea?.trim() || null,
      shift: shift?.trim() || null,
      startDate: startDate?.trim() || null,
      expectedSalary: expectedSalary?.trim() || null,
      cvFile: cvFile?.name
        ? {
            name: cvFile.name,
            type: cvFile.type || null,
            size: cvFile.size || null,
            content: cvFile.content || null,
          }
        : undefined,
    });

    // 5. Trả về kết quả thành công cho frontend
    return res.status(200).json({
      success: true,
      message: "Nộp đơn ứng tuyển thành công!",
      data: {
        id: newApplication._id,
        jobId: newApplication.jobId,
        jobTitle: newApplication.jobTitle,
        fullName: newApplication.fullName,
        email: newApplication.email,
        createdAt: newApplication.createdAt,
      },
    });
  } catch (error) {
    console.error("Lỗi khi lưu đơn ứng tuyển vào MongoDB Atlas:", error);
    return res.status(500).json({
      success: false,
      message: "Đã xảy ra lỗi trong quá trình lưu đơn ứng tuyển. Vui lòng thử lại sau.",
      details: error.message,
    });
  }
};

/**
 * Controller lấy danh sách đơn ứng tuyển từ MongoDB Atlas
 * Route: GET /api/applications
 */
export const getApplications = async (req, res) => {
  try {
    const applications = await Application.find()
      .select("-cvFile.content") // Không trả về base64 nặng nếu không cần thiết
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: applications.length,
      applications,
    });
  } catch (error) {
    console.error("Lỗi khi lấy danh sách đơn ứng tuyển:", error);
    return res.status(500).json({
      success: false,
      message: "Không thể lấy danh sách đơn ứng tuyển",
      details: error.message,
    });
  }
};
