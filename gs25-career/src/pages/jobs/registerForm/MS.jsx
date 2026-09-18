import { useState, useRef } from "react";
import { UploadCloud, CheckCircle2} from "lucide-react";
import IntroduceForm from './IntroduceForm'

const MS = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cvFile: null,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        cvFile: file,
      }));

      // Tạo preview nếu là ảnh
      if (file.type.startsWith("image/")) {
        setPreviewImage(URL.createObjectURL(file));
      } else {
        setPreviewImage(null);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dữ liệu ứng tuyển:", formData);
    alert("Nộp đơn ứng tuyển thành công!");
  };

  return (
    <>
        <div className="w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#F0F0F0]">
        {/* Introduce */}
        <IntroduceForm jobName={'QA Team Leader'} time={"Toàn thời gian"} salary={"25.500 VND/h"} type={"QA & QC"} />

        {/* Details */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-2xl mb-4">
            <h1 className="text-xl text-red-400 mb-4 font-bold">I. MÔ TẢ CÔNG VIỆC</h1>
            <ul className="text-[#226FA1] font-medium">
                <li className="mb-3">• Đóng vai khách hàng đến tham quan và mua sắm tại các cửa hàng GS25 được chỉ định nhằm đánh giá chất lượng dịch vụ, sản phẩm, trưng bày và vệ sinh cửa hàng.­</li>
                <li className="mb-3">• Ghi nhận, đánh giá và báo cáo kết quả trung thực, khách quan và chi tiết theo biểu mẫu/hướng dẫn của bộ phận phụ trách.</li>
                <li className="mb-3">• Sau mỗi lượt chấm, gửi báo cáo đúng form và đúng thời gian quy định.</li>
                <li className="mb-3">• Thực hiện công việc theo sự phân công của Quản lý và Bộ phận QC.</li>
            
            </ul>

            <h1 className="text-xl text-red-400 mb-4 font-bold">II. THỜI GIAN & HÌNH THỨC LÀM VIỆC</h1>
            <ul className="text-[#226FA1] font-medium">
                <li className="mb-3">• Khung giờ làm việc trong ngày: 08h30 – 11h00 & 14h00 – 17h00</li>
                <li className="mb-3">• Trường hợp đăng ký cả MS & QC sẽ thực hiện MS trước, sau đó mới thực hiện QC.</li>
                <li className="mb-3">• Ứng viên được phân nhóm theo khu vực để thuận tiện di chuyển.</li>
                <li className="mb-3">• Danh sách cửa hàng và hướng dẫn chi tiết sẽ được thông báo và đào tạo nội bộ trước khi bắt đầu.</li>    
   
            </ul>

            <h1 className="text-xl text-red-400 mb-4 font-bold">III. YÊU CẦU ỨNG VIÊN</h1>
            <ul className="text-[#226FA1] font-medium">
                <li className="mb-3">• Tốt nghiệp THPT trở lên.</li>
                <li className="mb-3">• Có khả năng quan sát tốt, đánh giá chi tiết và trung thực.</li>
                <li className="mb-3">• Năng động, linh hoạt, có thể di chuyển giữa nhiều cửa hàng.</li>
                <li className="mb-3">• Có khả năng làm việc độc lập và theo nhóm.</li>
                <li className="mb-3">• Ưu tiên ứng viên có phương tiện di chuyển riêng và thông thạo khu vực sinh sống.</li>
               
            </ul>

            <h1 className="text-xl text-red-400 mb-4 font-bold">IV. THU NHẬP & QUYỀN LỢI</h1>
            <ul className="text-[#226FA1] font-medium">
                <li className="mb-3"><strong>• Lương: 25.500 VNĐ/giờ.</strong></li>
                <li className="mb-3"><strong>• Không làm quá 91 giờ/tháng.</strong></li>
                <li className="mb-3"><strong>• Mỗi bài chấm dự kiến khoảng 2 giờ, công sẽ được QA/QC xác nhận sau khi hoàn thành và duyệt báo cáo.</strong></li>
                <li className="mb-3"><strong>• Có hỗ trợ chi phí mua sắm tại cửa hàng.</strong></li>
                <li className="mb-3">• Công việc linh hoạt, phù hợp với sinh viên hoặc người tìm việc làm thêm.</li>
                <li className="mb-3">• Cơ hội trải nghiệm thực tế trong các mảng vận hành hệ thống cửa hàng, dịch vụ khách hàng và kiểm soát chất lượng (QC) tại GS25.</li>
            </ul>
        </div>
    
        {/* Khung Form căn giữa cách đều 2 bên lề */}
        <br />
          <div id="sm-form" className="max-w-6xl mx-auto bg-[#0071B9] rounded-3xl p-6 sm:p-10 shadow-2xl text-white">
            
            {/* Title chính */}
            <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-8 sm:mb-10">
              Nộp đơn ứng tuyển công việc này
            </h1>
    
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-5 sm:gap-6">
                
                {/* Họ & tên */}
                <div>
                  <label className="block text-sm sm:text-base font-semibold text-white mb-2">
                    Họ & tên <span className="text-red-300">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Nhập họ và tên của bạn"
                    className="w-full bg-white text-gray-800 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00BFDD] shadow-sm placeholder:text-gray-400 text-sm sm:text-base"
                  />
                </div>
    
                {/* Địa chỉ Email */}
                <div>
                  <label className="block text-sm sm:text-base font-semibold text-white mb-2">
                    Địa chỉ Email <span className="text-red-300">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    className="w-full bg-white text-gray-800 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00BFDD] shadow-sm placeholder:text-gray-400 text-sm sm:text-base"
                  />
                </div>
    
                {/* Số điện thoại */}
                <div>
                  <label className="block text-sm sm:text-base font-semibold text-white mb-2">
                    Số điện thoại <span className="text-red-300">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="09xxxxxxxx"
                    className="w-full bg-white text-gray-800 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00BFDD] shadow-sm placeholder:text-gray-400 text-sm sm:text-base"
                  />
                </div>
    
              </div>
    
              {/* Khoảng hình chữ nhật nét đứt tải lên CV */}
              <div className="pt-2">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*,.pdf,.doc,.docx"
                  className="hidden"
                />
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-white/60 hover:border-white rounded-2xl p-6 sm:p-8 text-center cursor-pointer transition-all duration-200 bg-white/5 hover:bg-white/10 group"
                >
                  <UploadCloud className="w-10 h-10 text-white mx-auto mb-2 opacity-90 group-hover:scale-110 transition-transform duration-200" />
                  <p className="text-white font-bold text-base sm:text-lg">
                    CV của bạn
                  </p>
                  <p className="text-white/80 text-xs sm:text-sm mt-1">
                    Click để chọn & tải lên CV
                  </p>
    
                  {/* Hiển thị file đã chọn */}
                  {formData.cvFile && (
                    <div className="mt-4 flex flex-col items-center gap-2">
                      <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-xl text-white text-sm font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                        <span className="truncate max-w-xs">{formData.cvFile.name}</span>
                      </div>
    
                      {previewImage && (
                        <div className="mt-2 relative w-24 h-24 rounded-lg overflow-hidden border border-white/40 shadow-md">
                          <img
                            src={previewImage}
                            alt="CV Preview"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
    
              {/* Nút nộp đơn ứng tuyển */}
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-12 py-3.5 bg-[#00BFDD] hover:bg-[#00a7c2] active:scale-95 text-white font-extrabold text-lg sm:text-xl rounded-xl shadow-lg transition-all duration-200 cursor-pointer"
                >
                  Nộp đơn ứng tuyển
                </button>
              </div>
            </form>
    
          </div>
        </div>
    </>
  );
};

export default MS;