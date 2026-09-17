import { useState } from "react";
import { Calendar } from "lucide-react";
import IntroduceForm from './IntroduceForm'

const CuliForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    birthday: "",
    sex: "",
    idCard: "",
    hasOriginalId: "",
    education: "",
    workingArea: "",
    shift: "",
    startDate: "",
    cvFile: null,
  });

  // const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
        <IntroduceForm jobName={'NHÂN VIÊN BÁN HÀNG'} time={"Bán thời gian"} salary={"25.500/giờ"} type={"Khối Cửa hàng"} />

        {/* Details */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-2xl mb-4">
            <h1 className="text-xl text-red-400 mb-4 font-bold">TỔNG QUAN VỀ CÔNG VIỆC</h1>
            <ul className="text-[#226FA1] font-semibold">
                <li className="mb-3">• Có trách nhiệm tư vấn bán hàng, thực hiện các hoạt động vận hành tại cửa hàng một cách hiệu quả.</li>
                <li className="mb-3">• Đảm bảo duy trì chất lượng dịch vụ tại cửa hàng để phục vụ khách hàng một cách tốt nhất, mang đến khách hàng trải nghiệm chuyên nghiệp tại GS25 Vietnam.</li>
            </ul>

            <h1 className="text-xl text-red-400 mb-4 font-bold">TẠI SAO BẠN NÊN CHỌN GS25?</h1>
            <ul className="text-[#226FA1] font-semibold">
                <li className="mb-3">• Lương, thưởng hấp dẫn và cạnh tranh.</li>
                <li className="mb-3">• 12 ngày phép năm, Lương tháng 13, Thưởng Lễ, Tết, Công đoàn.</li>
                <li className="mb-3">• Chương trình đào tạo chuyên nghiệp, bài bản gồm: nghiệp vụ, sản phẩm, các quy trình tại cửa hàng, sử dụng hệ thống, thiết bị, …</li>
                <li className="mb-3">• Cơ hội thăng tiến rõ ràng và phù hợp với năng lực: Trợ lý Cửa hàng, Quản lý Cửa hàng, …</li>
                <li className="mb-3">• Văn hóa 4F (Friendly - Fresh - Fun - Fair) tạo nên môi trường làm việc thân thiện, năng động, trẻ trung, công bằng.</li>
            </ul>

            <h1 className="text-xl text-red-400 mb-4 font-bold">BẠN SẼ LÀM NHỮNG CÔNG VIỆC GÌ?</h1>
            <ul className="text-[#226FA1] font-semibold">
                <li className="mb-3">• Tuân thủ thực hiện các tiêu chuẩn dịch vụ của GS25 Vietnam.</li>
                <li className="mb-3">• Sắp xếp và đảm bảo hàng hóa tại cửa hàng luôn trong tình trạng sạch sẽ, đạt quy chuẩn, …</li>
                <li className="mb-3">• Kiểm tra bảng giá, chất lượng sản phẩm trên kệ, tủ để có thể thay thế hoặc bổ sung.</li>
                <li className="mb-3">• Thực hiện các công tác kiểm date định kỳ theo ngày, tuần, tháng, quý, năm.</li>
                <li className="mb-3">• Chế biến các món ăn nhanh (Fresh Food) tại cửa hàng.</li>
                <li className="mb-3">• Thực hiện công tác nhận hàng, kiểm đếm hàng hóa từ kho tổng.</li>    
                <li className="mb-3">• Tiếp nhận khiếu nại, sự cố hoặc các vấn đề phát sinh của khách hàng.</li>    
                <li className="mb-3">• Luôn giữ thái độ nhiệt tình, tươi cười khi giao tiếp với khách hàng và ưu tiên hỗ trợ khách hàng trong mọi tình huống.</li>     
                <li className="mb-3">• Thực hiện những công việc khác theo phân công của Quản lý Cửa hàng.</li>     
            </ul>

            <h1 className="text-xl text-red-400 mb-4 font-bold">THÔNG TIN VỊ TRÍ: Nhân viên Bán hàng bán thời gian/ Part-time:  </h1>
            <ul className="text-[#226FA1] font-semibold">
                <li className="mb-3 text-red-400">- Thu nhập: 25.500/giờ</li>
                <li className="mb-3 text-red-400">- Ca làm việc: Làm việc tối thiểu 04 ca trong tuần (ưu tiên ứng viên có thể xoay ca linh hoạt)</li>
                <li className="mb-3">• Ca 1: 06h00 - 10h00</li>
                <li className="mb-3">• Ca 2: 08h00 - 12h00</li>
                <li className="mb-3">• Ca 3: 10h00 - 14h00</li>
                <li className="mb-3">• Ca 4: 14h00 - 18h00</li>
                <li className="mb-3">• Ca 5: 18h00 - 22h00</li>
                <li className="mb-3">• Ca đêm: 22h00 - 06h00</li>
            </ul>

            <h1 className="text-xl text-red-400 mb-4 font-bold">YÊU CẦU CÔNG VIỆC: </h1>
            <ul className="text-[#226FA1] font-semibold">
                <li className="mb-3">• Độ tuổi: Từ 20 - 35 tuổi.</li>
                <li className="mb-3">• Tối thiểu tốt nghiệp THPT.</li>
                <li className="mb-3">• Có thể làm xoay ca linh hoạt</li>
                <li className="mb-3">• Nhanh nhẹn, khéo léo, ngăn nắp, trung thực, trách nhiệm trong công việc.</li>
                <li className="mb-3">• Sức khỏe tốt, đáp ứng yêu cầu công việc.</li>
                <li className="mb-3">• Kỹ năng giao tiếp tốt, khả năng xử lý tình huống tốt.</li>
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

              {/* Ngày tháng năm sinh */}
                <div>
                  <label className="block text-sm sm:text-base font-semibold text-white mb-2">
                    Ngày tháng năm sinh <span className="text-red-300">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="birthday"
                      required
                      value={formData.birthday}
                      onChange={handleChange}
                      onClick={(e) => e.target.showPicker?.()}
                      className="w-full bg-white text-gray-800 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00BFDD] shadow-sm cursor-pointer text-sm sm:text-base"
                    />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Giới tính */}
                <div className="md:col-span-2">
                  <label className="block text-sm sm:text-base font-semibold text-white mb-2">
                    Giới tính của bạn <span className="text-red-300">*</span>
                  </label>
                  <select
                    name="sex"
                    required
                    value={formData.sex}
                    onChange={handleChange}
                    className="w-full bg-white text-gray-800 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00BFDD] shadow-sm cursor-pointer text-sm sm:text-base"
                  >
                    <option value="" disabled>-- Chọn giới tính --</option>
                    <option value="Đang giữ bản gốc">Nam</option>
                    <option value="Nữ">Nữ</option>
                    <option value="Khác">Khác</option>
                  </select>
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
                    Bạn có thể xoay ca không? <span className="text-red-300">*</span>
                  </label>
                  <select
                    name="shift"
                    required
                    value={formData.shift}
                    onChange={handleChange}
                    className="w-full bg-white text-gray-800 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#00BFDD] shadow-sm cursor-pointer text-sm sm:text-base"
                  >
                    <option value="" disabled>-- Bạn có thể xoay ca không? --</option>
                    <option value="Có">Có</option>
                    <option value="Không">Không</option>
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

export default CuliForm;