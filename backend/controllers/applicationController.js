import transporter from "../config/email.js";

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
 * Controller xử lý tiếp nhận đơn ứng tuyển từ 6 form
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

    // Kiểm tra cấu hình email nhà tuyển dụng
    const employerEmail = process.env.EMPLOYER_EMAIL;
    if (!employerEmail || employerEmail === "your_email@gmail.com") {
      console.warn("Chưa cấu hình EMPLOYER_EMAIL hợp lệ trong .env!");
    }

    // Chuẩn bị danh sách thông tin chi tiết để đưa vào email
    const applicantDetails = [
      { label: "Vị trí ứng tuyển", value: jobTitle },
      { label: "Mã vị trí (Job ID)", value: jobId || "Chưa xác định" },
      { label: "Họ và tên ứng viên", value: fullName.trim() },
      { label: "Email", value: email.trim() },
      { label: "Số điện thoại", value: phone.trim() },
    ];

    if (idCard) applicantDetails.push({ label: "Số CCCD/CMND", value: idCard });
    if (birthday) applicantDetails.push({ label: "Ngày sinh", value: birthday });
    if (sex) applicantDetails.push({ label: "Giới tính", value: sex });
    if (hasOriginalId) applicantDetails.push({ label: "Bản gốc CCCD/CMND", value: hasOriginalId });
    if (education) applicantDetails.push({ label: "Trình độ học vấn", value: education });
    if (workingArea) applicantDetails.push({ label: "Khu vực làm việc mong muốn", value: workingArea });
    if (shift) applicantDetails.push({ label: "Khả năng xoay ca", value: shift });
    if (expectedSalary) applicantDetails.push({ label: "Mức lương mong muốn", value: expectedSalary });
    if (startDate) applicantDetails.push({ label: "Ngày có thể bắt đầu làm việc", value: startDate });
    applicantDetails.push({
      label: "File CV đính kèm",
      value: cvFile?.name ? `${cvFile.name}` : "Không đính kèm",
    });

    const nowFormatted = new Date().toLocaleString("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
    });

    // Tạo bảng HTML hiển thị chi tiết ứng viên
    const tableRowsHtml = applicantDetails
      .map(
        (item) => `
          <tr>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; background-color: #f8fafc; font-weight: 600; width: 35%; color: #334155;">
              ${item.label}
            </td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; color: #0f172a;">
              ${item.value}
            </td>
          </tr>
        `
      )
      .join("");

    // 4. Cấu hình Email gửi cho NHÀ TUYỂN DỤNG (EMPLOYER)
    const employerMailOptions = {
      from: `"GS25 Career Portal" <${employerEmail || "no-reply@gs25.vn"}>`,
      to: employerEmail,
      subject: `[GS25 Career] Đơn ứng tuyển mới - ${jobTitle} - ${fullName.trim()}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 680px; margin: 0 auto; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          <!-- Header Banner -->
          <div style="background: linear-gradient(135deg, #0071B9 0%, #00BFDD 100%); color: #ffffff; padding: 24px 28px;">
            <h1 style="margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 0.5px;">GS25 VIETNAM - THÔNG BÁO ỨNG TUYỂN MỚI</h1>
            <p style="margin: 6px 0 0 0; opacity: 0.9; font-size: 14px;">Hệ thống vừa tiếp nhận hồ sơ ứng tuyển từ website GS25 Careers</p>
          </div>

          <!-- Body Content -->
          <div style="padding: 24px 28px;">
            <div style="background-color: #f0fdf4; border-left: 4px solid #22c55e; padding: 12px 16px; margin-bottom: 20px; border-radius: 4px;">
              <p style="margin: 0; color: #166534; font-size: 14px; font-weight: 600;">
                Ứng viên: <span style="font-size: 16px;">${fullName.trim()}</span> - Vị trí: <span style="color: #0071B9;">${jobTitle}</span>
              </p>
              <p style="margin: 4px 0 0; color: #64748b; font-size: 13px;">Thời gian nộp: ${nowFormatted}</p>
            </div>

            <h3 style="color: #0f172a; margin-top: 0; margin-bottom: 12px; font-size: 16px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
              Chi tiết thông tin ứng viên
            </h3>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
              <tbody>
                ${tableRowsHtml}
              </tbody>
            </table>

            ${
              cvFile?.content
                ? `<p style="margin: 0; padding: 10px; background-color: #eff6ff; border-radius: 6px; font-size: 13px; color: #1d4ed8;">
                    📎 Đã đính kèm file CV <strong>${cvFile.name}</strong> trong email này.
                   </p>`
                : ""
            }
          </div>

          <!-- Footer -->
          <div style="background-color: #f1f5f9; padding: 16px 28px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b;">
            <p style="margin: 0;">Email tự động gửi từ hệ thống tuyển dụng GS25 Vietnam.</p>
          </div>
        </div>
      `,
    };

    // Đính kèm file CV nếu có
    if (cvFile && cvFile.name && cvFile.content) {
      employerMailOptions.attachments = [
        {
          filename: cvFile.name,
          content: cvFile.content,
          encoding: "base64",
        },
      ];
    }

    // 5. Cấu hình Email gửi cho ỨNG VIÊN (APPLICANT)
    const applicantMailOptions = {
      from: `"GS25 Vietnam Careers" <${employerEmail || "no-reply@gs25.vn"}>`,
      to: email.trim(),
      subject: `[GS25 Career] Xác nhận ứng tuyển thành công - ${jobTitle}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 640px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #0071B9 0%, #00BFDD 100%); color: #ffffff; padding: 24px 28px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 800;">GS25 VIETNAM</h1>
            <p style="margin: 6px 0 0 0; font-size: 15px; opacity: 0.95;">Xác nhận tiếp nhận hồ sơ ứng tuyển</p>
          </div>

          <!-- Body -->
          <div style="padding: 28px;">
            <p style="font-size: 16px; color: #1e293b; margin-top: 0;">
              Xin chào <strong>${fullName.trim()}</strong>,
            </p>

            <p style="font-size: 14px; line-height: 1.6; color: #334155;">
              Cảm ơn bạn đã quan tâm và nộp đơn ứng tuyển vị trí <strong style="color: #0071B9;">${jobTitle}</strong> tại hệ thống chuỗi cửa hàng tiện lợi <strong>GS25 Việt Nam</strong>.
            </p>

            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px 20px; margin: 20px 0;">
              <h4 style="margin: 0 0 10px 0; color: #0f172a; font-size: 14px; text-transform: uppercase;">
                Thông tin hồ sơ tiếp nhận
              </h4>
              <ul style="margin: 0; padding-left: 20px; font-size: 14px; color: #475569; line-height: 1.8;">
                <li><strong>Vị trí ứng tuyển:</strong> ${jobTitle}</li>
                <li><strong>Họ và tên:</strong> ${fullName.trim()}</li>
                <li><strong>Số điện thoại:</strong> ${phone.trim()}</li>
                <li><strong>Email:</strong> ${email.trim()}</li>
                <li><strong>Thời gian nộp:</strong> ${nowFormatted}</li>
              </ul>
            </div>

            <h4 style="color: #0f172a; font-size: 15px; margin-bottom: 8px;">Quy trình tiếp theo:</h4>
            <ol style="margin: 0 0 20px 0; padding-left: 20px; font-size: 14px; color: #475569; line-height: 1.6;">
              <li>Bộ phận Tuyển dụng GS25 sẽ tiến hành sàng lọc và đánh giá hồ sơ của bạn.</li>
              <li>Nếu hồ sơ phù hợp với yêu cầu vị trí, chúng tôi sẽ chủ động liên hệ với bạn qua điện thoại hoặc email trong vòng <strong>03 - 07 ngày làm việc</strong> để hẹn lịch phỏng vấn.</li>
            </ol>

            <p style="font-size: 14px; line-height: 1.6; color: #334155;">
              Chúc bạn luôn tràn đầy năng lượng và nhiều may mắn trên hành trình phát triển sự nghiệp cùng GS25!
            </p>

            <p style="font-size: 14px; color: #334155; margin-bottom: 0;">
              Trân trọng,<br>
              <strong style="color: #0071B9;">Đội ngũ Tuyển dụng GS25 Việt Nam</strong>
            </p>
          </div>

          <!-- Footer -->
          <div style="background-color: #f1f5f9; padding: 16px 24px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; line-height: 1.5;">
            <p style="margin: 0 0 4px 0;">🏢 GS25 Vietnam - Công ty TNHH GS 25 Việt Nam</p>
            <p style="margin: 0; font-style: italic;">* Lưu ý: Đây là email tự động từ hệ thống GS25 Careers. Vui lòng không trả lời trực tiếp email này.</p>
          </div>
        </div>
      `,
    };

    // 6. Gửi cả 2 email (cho Employer và cho Applicant)
    const emailPromises = [];

    // Gửi email cho employer nếu đã cấu hình
    if (employerEmail && employerEmail !== "your_email@gmail.com") {
      emailPromises.push(
        transporter.sendMail(employerMailOptions).catch((err) => {
          console.error("Lỗi gửi email cho Employer:", err);
          return { error: true, target: "employer", message: err.message };
        })
      );
    } else {
      console.warn("Bỏ qua gửi email employer vì chưa cấu hình EMPLOYER_EMAIL.");
    }

    // Gửi email xác nhận cho applicant
    if (employerEmail && employerEmail !== "your_email@gmail.com") {
      emailPromises.push(
        transporter.sendMail(applicantMailOptions).catch((err) => {
          console.error("Lỗi gửi email cho Applicant:", err);
          return { error: true, target: "applicant", message: err.message };
        })
      );
    }

    // Đợi hoàn thành các tiến trình gửi email
    await Promise.all(emailPromises);

    // 7. Trả về kết quả thành công cho frontend
    return res.status(200).json({
      success: true,
      message: `Nộp đơn ứng tuyển vị trí ${jobTitle} thành công! Email xác nhận đã được gửi tới ${email.trim()}.`,
      data: {
        jobId,
        jobTitle,
        fullName: fullName.trim(),
        email: email.trim(),
      },
    });
  } catch (error) {
    console.error("Lỗi xử lý đơn ứng tuyển:", error);
    return res.status(500).json({
      success: false,
      message: "Đã xảy ra lỗi trong quá trình xử lý đơn ứng tuyển. Vui lòng thử lại sau.",
      details: error.message,
    });
  }
};
