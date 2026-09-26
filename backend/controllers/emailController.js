import transporter from "../config/email.js";

/**
 * Controller kiểm tra kết nối tới Gmail SMTP (transporter.verify)
 * Route: GET /api/email/test
 */
export const testEmailConnection = async (req, res) => {
  const { EMPLOYER_EMAIL, EMPLOYER_EMAIL_PASSWORD } = process.env;

  // Kiểm tra cấu hình biến môi trường
  if (
    !EMPLOYER_EMAIL ||
    !EMPLOYER_EMAIL_PASSWORD ||
    EMPLOYER_EMAIL === "your_email@gmail.com" ||
    EMPLOYER_EMAIL_PASSWORD === "your_app_password"
  ) {
    return res.status(400).json({
      success: false,
      message:
        "Chưa cấu hình EMPLOYER_EMAIL hoặc EMPLOYER_EMAIL_PASSWORD hợp lệ trong file backend/.env",
      guide:
        "Vui lòng tạo 'Mật khẩu ứng dụng' (App Password) trên tài khoản Google và cập nhật vào backend/.env",
    });
  }

  try {
    // Xác thực kết nối tới Gmail SMTP server
    await transporter.verify();

    return res.status(200).json({
      success: true,
      message: "Kết nối tới Gmail SMTP thành công! Transporter đã sẵn sàng gửi email.",
      email: EMPLOYER_EMAIL,
    });
  } catch (error) {
    console.error("Lỗi kết nối Gmail SMTP:", error);

    let hint = "Vui lòng kiểm tra lại cấu hình email.";
    if (error.code === "EAUTH" || error.responseCode === 535) {
      hint =
        "Lỗi xác thực (EAUTH / 535 5.7.8): Tài khoản hoặc Mật khẩu ứng dụng (App Password) không chính xác. Đảm bảo bạn đã bật Xác minh 2 bước và tạo Mật khẩu ứng dụng 16 ký tự.";
    }

    return res.status(500).json({
      success: false,
      message: "Không thể kết nối tới Gmail SMTP",
      code: error.code || error.name,
      details: error.message,
      hint,
    });
  }
};

/**
 * Controller gửi email test thực tế
 * Route: POST /api/email/test
 */
export const sendTestEmail = async (req, res) => {
  const { EMPLOYER_EMAIL, EMPLOYER_EMAIL_PASSWORD } = process.env;

  if (
    !EMPLOYER_EMAIL ||
    !EMPLOYER_EMAIL_PASSWORD ||
    EMPLOYER_EMAIL === "your_email@gmail.com" ||
    EMPLOYER_EMAIL_PASSWORD === "your_app_password"
  ) {
    return res.status(400).json({
      success: false,
      message:
        "Chưa cấu hình EMPLOYER_EMAIL hoặc EMPLOYER_EMAIL_PASSWORD trong backend/.env",
    });
  }

  // Cho phép chỉ định người nhận qua body hoặc query, mặc định gửi về chính EMPLOYER_EMAIL
  const recipient = req.body?.to || req.query?.to || EMPLOYER_EMAIL;

  try {
    const info = await transporter.sendMail({
      from: `"GS25 Careers" <${EMPLOYER_EMAIL}>`,
      to: recipient,
      subject: "[GS25 Careers] Test kết nối Nodemailer + Gmail SMTP",
      text: "Xin chào! Đây là email kiểm tra kết nối từ hệ thống GS25 Careers. Cấu hình Nodemailer và Gmail SMTP đã hoạt động chính xác.",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px;">
          <h2 style="color: #00704a; border-bottom: 2px solid #00704a; padding-bottom: 8px;">GS25 Careers - Email Test</h2>
          <p>Xin chào,</p>
          <p>Đây là email kiểm tra từ hệ thống <strong>GS25 Careers</strong> được gửi qua <strong>Nodemailer + Gmail SMTP</strong>.</p>
          <div style="background-color: #f4f6f8; padding: 12px; border-radius: 6px; margin: 16px 0;">
            <p style="margin: 0;"><strong>Trạng thái:</strong> ✅ Transporter hoạt động thành công!</p>
            <p style="margin: 4px 0 0;"><strong>Thời gian gửi:</strong> ${new Date().toLocaleString("vi-VN")}</p>
          </div>
          <p style="color: #666; font-size: 13px;">Hệ thống đã sẵn sàng để tích hợp gửi hồ sơ ứng tuyển.</p>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: `Đã gửi email test thành công tới ${recipient}!`,
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("Lỗi khi gửi email test:", error);

    let hint = "Vui lòng kiểm tra lại cấu hình.";
    if (error.code === "EAUTH" || error.responseCode === 535) {
      hint =
        "Lỗi xác thực (EAUTH / 535 5.7.8): Mật khẩu ứng dụng Google không đúng hoặc đã bị thu hồi.";
    }

    return res.status(500).json({
      success: false,
      message: "Gửi email thất bại",
      code: error.code || error.name,
      details: error.message,
      hint,
    });
  }
};
