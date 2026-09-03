import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

// Regex kiểm tra hợp lệ
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Số điện thoại VN: bắt đầu 0 hoặc +84, theo sau 9-10 chữ số
const PHONE_REGEX = /^(0|\+84)(\s?\d){9,10}$/;

const initialForm = {
  name: "",
  email: "",
  phone: "",
  address: "",
  message: "",
};

function validate(form) {
  const errors = {};

  if (!form.name.trim()) {
    errors.name = "Vui lòng nhập tên của bạn";
  } else if (form.name.trim().length < 2) {
    errors.name = "Tên phải có ít nhất 2 ký tự";
  }

  if (!form.email.trim()) {
    errors.email = "Vui lòng nhập email";
  } else if (!EMAIL_REGEX.test(form.email.trim())) {
    errors.email = "Email không đúng định dạng";
  }

  if (!form.phone.trim()) {
    errors.phone = "Vui lòng nhập số điện thoại";
  } else if (!PHONE_REGEX.test(form.phone.trim())) {
    errors.phone = "Số điện thoại không hợp lệ (VD: 0912345678)";
  }

  if (!form.address.trim()) {
    errors.address = "Vui lòng nhập địa chỉ";
  } else if (form.address.trim().length < 5) {
    errors.address = "Địa chỉ quá ngắn, vui lòng nhập đầy đủ hơn";
  }

  if (!form.message.trim()) {
    errors.message = "Vui lòng nhập tin nhắn";
  } else if (form.message.trim().length < 10) {
    errors.message = "Tin nhắn cần ít nhất 10 ký tự";
  }

  return errors;
}

function FieldError({ message }) {
  if (!message) return null;
  return <p className="mt-1 text-sm text-red-500">{message}</p>;
}

function InputField({ label, error, ...props }) {
  return (
    <div className="flex-1">
      <input
        {...props}
        placeholder={label}
        className={`w-full rounded-xl px-5 py-4 text-blue-900 placeholder-blue-400 font-semibold
          bg-blue-50 border-2 outline-none transition-colors
          ${
            error
              ? "border-red-400 bg-red-50 placeholder-red-300"
              : "border-transparent focus:border-blue-400 focus:bg-white"
          }`}
      />
      <FieldError message={error} />
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Xoá lỗi ngay khi user sửa lại field đó
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    // TODO: nơi này sẽ gọi API / gửi email thật sau
    setStatus("sending");
    setTimeout(() => {
      console.log("Form hợp lệ, dữ liệu sẽ được gửi:", form);
      setStatus("sent");
      setForm(initialForm);
    }, 800);
  }

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Cột trái - thông tin văn phòng */}
        <div className="rounded-3xl border border-blue-100 shadow-[0_10px_40px_-15px_rgba(59,130,246,0.25)] p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-8">
            Văn Phòng GS25 Việt Nam
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
              <p className="font-bold text-blue-700 text-lg">
                106 Nguyễn Giản Thanh, P. Hòa Hưng, TP. HCM
              </p>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
              <p className="font-bold text-blue-700 text-lg">
                Hotline: 1900 63 60 78
              </p>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
              <p className="font-bold text-blue-700 text-lg">
                Email: hello@gs25.com.vn | cskh@gs25.com.vn
              </p>
            </div>
          </div>

          <button
            type="button"
            className="mt-10 w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-500 hover:to-teal-500 transition-colors text-white font-extrabold text-lg py-5 shadow-lg shadow-cyan-200"
          >
            Đăng Ký Cho Thuê Mặt Bằng
          </button>
        </div>

        {/* Cột phải - form liên hệ */}
        <div className="p-2 md:p-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-2">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-blue-300 font-medium mb-8">
            GS25 luôn sẵn sàng lắng nghe ý kiến và góp ý từ bạn.
          </p>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="flex flex-col md:flex-row gap-5">
              <InputField
                label="Tên"
                name="name"
                value={form.name}
                onChange={handleChange}
                error={errors.name}
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-5">
              <InputField
                label="Số điện thoại"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                error={errors.phone}
              />
              <InputField
                label="Địa chỉ"
                name="address"
                value={form.address}
                onChange={handleChange}
                error={errors.address}
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Tin nhắn"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={`w-full resize-none rounded-xl px-5 py-4 text-blue-900 placeholder-blue-400 font-semibold
                  bg-blue-50 border-2 outline-none transition-colors
                  ${
                    errors.message
                      ? "border-red-400 bg-red-50 placeholder-red-300"
                      : "border-transparent focus:border-blue-400 focus:bg-white"
                  }`}
              />
              <FieldError message={errors.message} />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-2xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 transition-colors text-white font-extrabold text-lg py-5 shadow-lg shadow-blue-200"
            >
              {status === "sending" ? "Đang gửi..." : "Liên Hệ"}
            </button>

            {status === "sent" && (
              <p className="text-center text-teal-600 font-semibold">
                Gửi thành công! Chúng tôi sẽ liên hệ lại sớm nhất.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}