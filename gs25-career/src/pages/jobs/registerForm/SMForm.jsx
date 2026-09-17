import { useState, useRef } from "react";
import { UploadCloud, CheckCircle2, Calendar } from "lucide-react";
import IntroduceForm from './IntroduceForm'

const SMForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    idCard: "",
    hasOriginalId: "",
    education: "",
    workingArea: "",
    expectedSalary: "",
    startDate: "",
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
        <IntroduceForm jobName={'CỬA HÀNG TRƯỞNG'} time={"Toàn thời gian"} salary={"THỎA THUẬN"} type={"Khối Cửa hàng"} />

        {/* Details */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-2xl mb-4">
            <h1 className="text-xl text-red-400 mb-4 font-bold">TỔNG QUAN VỀ CÔNG VIỆC</h1>
            <ul className="text-[#226FA1] font-semibold">
                <li className="mb-3">• Chịu trách nhiệm quản lý và điều hành cửa hàng hoạt động một cách hiệu quả nhằm đáp ứng chiến lược kinh doanh của GS25.</li>
                <li className="mb-3">• Ngoài ra, bạn cần đảm bảo duy trì chất lượng dịch vụ tại cửa hàng để phục vụ khách hàng một cách tốt nhất, mang đến khách hàng trải nghiệm chuyên nghiệp, đồng thời dẫn dắt và hỗ trợ đội ngũ nhân viên tại cửa hàng.</li>
            </ul>

            <h1 className="text-xl text-red-400 mb-4 font-bold">TẠI SAO BẠN NÊN CHỌN GS25?</h1>
            <ul className="text-[#226FA1] font-semibold">
                <li className="mb-3">• Chương trình đào tạo chuyên nghiệp, bài bản gồm: nghiệp vụ, sản phẩm, các quy trình quản lý tại cửa hàng, sử dụng hệ thống, thiết bị, các kỹ năng quản lý nhân sự,...</li>
                <li className="mb-3">• Cơ hội thăng tiến rõ ràng và phù hợp với năng lực: Quản lý Khu vực, Quản lý Vùng...</li>
                <li className="mb-3">• Văn hóa 4F (Friendly - Fresh - Fun - Fair) tạo nên môi trường làm việc thân thiện, năng động, trẻ trung, công bằng.</li>
                <li className="mb-3">• Tham gia đầy đủ chế độ BHXH và Bảo Hiểm cá nhân dành cho cấp Quản lý.</li>
                <li className="mb-3">• 12 ngày phép năm, Lương tháng 13, Thưởng Lễ, Tết, Công đoàn.</li>
                <li className="mb-3">• Hưởng 100% lương trong thời gian Thử việc và Đào tạo.</li>    
            </ul>

            <h1 className="text-xl text-red-400 mb-4 font-bold">BẠN SẼ LÀM NHỮNG CÔNG VIỆC GÌ?</h1>
            <ul className="text-[#226FA1] font-semibold">
                <li className="mb-3">• Quản lý dịch vụ khách hàng tại cửa hàng nhằm đảm bảo mức độ trải nghiệm hài lòng của khách hàng, bao gồm: Vệ sinh cửa hàng sạch sẽ, sản phẩm trưng bày và tem giá đầy đủ, hết mình hỗ trợ khách hàng, ...;</li>
                <li className="mb-3">• Quản lý hàng hóa cửa hàng: Theo dõi mức tồn kho và đặt hàng đầy đủ, kiểm tra hàng hóa hết hạn, thực hiện đổi trả và hủy hàng theo quy định;</li>
                <li className="mb-3">• Quản lý nhân sự cửa hàng: Sắp xếp ca làm việc cho nhân viên theo quy định, đảm bảo tối ưu hóa chi phí nhân sự tại cửa hàng; chịu trách nhiệm hướng dẫn nhân viên CSR và ASM tại cửa hàng; đào tạo nhân sự kế thừa tại cửa hàng;</li>
                <li className="mb-3">• Quản lý chi phí vận hành cửa hàng (chi phí điện, nước, ...) nhằm tối ưu hóa chi phí vận hành;</li>
                <li className="mb-3">• Quản lý doanh số bán hàng cửa hàng, luôn thúc đẩy doanh số và đảm bảo doanh số cửa hàng theo mục tiêu của Công ty;</li>
                <li className="mb-3">• Chuẩn bị các báo cáo về hàng hóa và vận hành tại theo quy định;</li>    
                <li className="mb-3">• Đảm bảo cửa hàng tuân thủ các quy định an toàn vệ sinh thực phẩm, an toàn lao động;</li>    
                <li className="mb-3">• Giải quyết các khiếu nại và thắc mắc của khách hàng một cách chuyên nghiệp;</li>     
                <li className="mb-3">• Tham gia đề xuất, đóng góp các giải pháp và kế hoạch bán hàng cùng với Quản lý Khu vực (OFC) để thu hút khách hàng mới, mở rộng lưu lượng cửa hàng và nâng cao lợi nhuận;</li>     
                <li className="mb-3">• Thực hiện những công việc khác theo phân công của cấp trên.</li>     
            </ul>

            <h1 className="text-xl text-red-400 mb-4 font-bold">THỜI GIAN LÀM VIỆC</h1>
            <ul className="text-[#226FA1] font-semibold">
                <li className="mb-3">• Thời gian thử việc: Xoay ca 8 giờ, 6 ca/tuần.</li>
                <li className="mb-3">• Sau thời gian thử việc: Làm giờ hành chính. </li>
            </ul>

            <h1 className="text-xl text-red-400 mb-4 font-bold">BẠN CẦN GÌ?</h1>
            <ul className="text-[#226FA1] font-semibold">
                <li className="mb-3">• Độ tuổi: Từ 20 - 35 tuổi.</li>
                <li className="mb-3">• Tối thiểu tốt nghiệp THPT.</li>
                <li className="mb-3 text-orange-400">• Có ít nhất 06 tháng - 01 năm kinh nghiệm tại vị trí Cửa hàng trưởng, Quản lý, Giám sát,... tại các chuỗi cửa hàng tiện lợi, coffee, nhà hàng, chuỗi cửa hàng đa sản phẩm, v.v.</li>
                <li className="mb-3">• Kỹ năng giao tiếp và quản lý đội nhóm tốt.</li>
                <li className="mb-3">• Nhạy bén, khả năng xử lý tình huống.</li>
                <li className="mb-3">• Nhanh nhẹn, linh hoạt, chủ động trong công việc.</li>
                <li className="mb-3">• Có tinh thần trách nhiệm và cầu tiến.</li>
                <li className="mb-3">• Có thể hỗ trợ cửa hàng 1-2 ca đêm/tuần.</li>
            </ul>

            <p className="bg-[#FBEEB8] text-lg text-[#0071B9] mb-4 font-bold">LƯU Ý: GS25 KHÔNG THU PHÍ ỨNG VIÊN VÀ CHỈ CÓ MỘT FANPAGE TUYỂN DỤNG DUY NHẤT.</p>
        </div>
    
        {/* Khung Form căn giữa cách đều 2 bên lề */}
        <br />
          <div id="sm-form" className="max-w-6xl mx-auto bg-[#0071B9] rounded-3xl p-6 sm:p-10 shadow-2xl text-white">
            
            {/* Title chính */}
            <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-8 sm:mb-10">
              Nộp đơn ứng tuyển công việc này
            </h1>
    
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                
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
    
                {/* Số CCCD/ CMND */}
                <div>
                  <label className="block text-sm sm:text-base font-semibold text-white mb-2">
                    Số CCCD/ CMND <span className="text-red-300">*</span>
                  </label>
                  <input
                    type="text"
                    name="idCard"
                    required
                    value={formData.idCard}
                    onChange={handleChange}
                    placeholder="Nhập số CCCD/CMND"
                    className="w-full bg-white text-gray-800 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00BFDD] shadow-sm placeholder:text-gray-400 text-sm sm:text-base"
                  />
                </div>
    
                {/* Giữ bản gốc CMND/CCCD */}
                <div className="md:col-span-2">
                  <label className="block text-sm sm:text-base font-semibold text-white mb-2">
                    Bạn có đang giữ bản gốc CMND/CCCD của mình không? <span className="text-red-300">*</span>
                  </label>
                  <select
                    name="hasOriginalId"
                    required
                    value={formData.hasOriginalId}
                    onChange={handleChange}
                    className="w-full bg-white text-gray-800 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00BFDD] shadow-sm cursor-pointer text-sm sm:text-base"
                  >
                    <option value="" disabled>-- Chọn tình trạng --</option>
                    <option value="Đang giữ bản gốc">Đang giữ bản gốc</option>
                    <option value="Đang làm mới">Đang làm mới</option>
                    <option value="Đã bị thất lạc">Đã bị thất lạc</option>
                  </select>
                </div>
    
                {/* Trình độ học vấn */}
                <div>
                  <label className="block text-sm sm:text-base font-semibold text-white mb-2">
                    Trình độ học vấn <span className="text-red-300">*</span>
                  </label>
                  <select
                    name="education"
                    required
                    value={formData.education}
                    onChange={handleChange}
                    className="w-full bg-white text-gray-800 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00BFDD] shadow-sm cursor-pointer text-sm sm:text-base"
                  >
                    <option value="" disabled>-- Chọn trình độ học vấn --</option>
                    <option value="Phổ thông">Phổ thông</option>
                    <option value="Trung cấp">Trung cấp</option>
                    <option value="Cao đẳng">Cao đẳng</option>
                    <option value="Đại học">Đại học</option>
                    <option value="Thạc sĩ">Thạc sĩ</option>
                    <option value="Tiến sĩ">Tiến sĩ</option>
                  </select>
                </div>
    
                {/* Khu vực bạn muốn làm việc */}
                <div>
                  <label className="block text-sm sm:text-base font-semibold text-white mb-2">
                    Khu vực bạn muốn làm việc <span className="text-red-300">*</span>
                  </label>
                  <input
                    type="text"
                    name="workingArea"
                    required
                    value={formData.workingArea}
                    onChange={handleChange}
                    placeholder="Ví dụ: Quận 1, TP.HCM hoặc Hà Nội..."
                    className="w-full bg-white text-gray-800 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00BFDD] shadow-sm placeholder:text-gray-400 text-sm sm:text-base"
                  />
                </div>
    
                {/* Mức lương mong muốn */}
                <div>
                  <label className="block text-sm sm:text-base font-semibold text-white mb-2">
                    Mức lương mong muốn <span className="text-red-300">*</span>
                  </label>
                  <select
                    name="expectedSalary"
                    required
                    value={formData.expectedSalary}
                    onChange={handleChange}
                    className="w-full bg-white text-gray-800 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00BFDD] shadow-sm cursor-pointer text-sm sm:text-base"
                  >
                    <option value="" disabled>-- Chọn mức lương mong muốn --</option>
                    <option value="7.000.000 đến 8.000.000">7.000.000 đến 8.000.000</option>
                    <option value="8.000.000 đến 9.000.000">8.000.000 đến 9.000.000</option>
                    <option value="Trên 9.000.000">Trên 9.000.000</option>
                  </select>
                </div>
    
                {/* Ngày sớm nhất bạn có thể nhận việc */}
                <div>
                  <label className="block text-sm sm:text-base font-semibold text-white mb-2">
                    Ngày sớm nhất bạn có thể nhận việc <span className="text-red-300">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="startDate"
                      required
                      value={formData.startDate}
                      onChange={handleChange}
                      onClick={(e) => e.target.showPicker?.()}
                      className="w-full bg-white text-gray-800 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00BFDD] shadow-sm cursor-pointer text-sm sm:text-base"
                    />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
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

export default SMForm;