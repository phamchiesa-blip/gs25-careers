import { useState, useRef } from "react";
import { UploadCloud, CheckCircle2} from "lucide-react";
import IntroduceForm from './IntroduceForm'

const QAForm = () => {
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
        <IntroduceForm jobName={'QA Team Leader'} time={"Toàn thời gian"} salary={"THỎA THUẬN"} type={"QA & QC"} />

        {/* Details */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-2xl mb-4">
            <h1 className="text-xl text-red-400 mb-4 font-bold">I. WHAT WILL YOU DO? </h1>
            <ul className="text-[#226FA1] font-medium">
                <li className="mb-3"><strong>1. PRODUCT & SUPPLIER QUALITY MANAGEMENT­­</strong> </li>
                <li className="mb-3"><strong>2. INCIDENT MANAGEMENT & CONTINUOUS IMPROVEMENT</strong> </li>
                <li className="mb-3"><strong>3. TEAM MANAGEMENT</strong> </li>
                <li className="mb-3"><strong>4. COORDINATION & REPORTING</strong> </li>
                <li className="mb-3"><strong>5. RULES AND REGULATIONS</strong> </li>
                <li className="mb-3"><strong>6. OTHER DUTIES</strong></li>
            </ul>

            <h1 className="text-xl text-red-400 mb-4 font-bold">II. REQUIREMENTS:</h1>
            <ul className="text-[#226FA1] font-medium">
                <li className="mb-3">• University degree in Food Technology, Food Chemistry, or other related fields</li>
                <li className="mb-3">• Strong knowledge of product quality documentation management; Food Safety regulations and relevant legal requirements</li>
                <li className="mb-3">• Proficiency in HACCP, ISO 22000, and FSSC 22000 standards</li>
                <li className="mb-3">• Strong expertise in supplier auditing and evaluation.</li>    
                <li className="mb-3">• At least 3 years of experience in QA/QC/Food Safety roles (Must).</li>    
                <li className="mb-3">• Familiarity with product testing, shelf-life studies, Root Cause Analysis (RCA), and Corrective and Preventive Actions (CAPA).</li>    
                <li className="mb-3">• At least 1 – 2 years of experience in a Senior, Leader, or equivalent position; Prior experience in the food retail chain or F&B sector is highly preferred.</li>    
                <li className="mb-3">• Proficiency in MS Office and basic technical English.</li>    
            </ul>

            <h1 className="text-xl text-red-400 mb-4 font-bold">III. WHY YOU SHOULD JOIN GS25?</h1>
            <ul className="text-[#226FA1] font-medium">
                <li className="mb-3">• Attractive salary.</li>
                <li className="mb-3">• 100% salary in 2 months of probation.</li>
                <li className="mb-3">• Special health insurance package of GS25.</li>
                <li className="mb-3">• 12 annual leaves/year.</li>
                <li className="mb-3">• 13th-month Salary, KPIs bonus, …</li>
                <li className="mb-3">• Company‘s computer provided</li>       
                <li className="mb-3">• Working in a dynamic and fast-growing environment with many opportunities for promotion and development.</li>       
            </ul>

            <h1 className="text-xl text-red-400 mb-4 font-bold">IV. POSITION INFORMATION</h1>
            <ul className="text-[#226FA1] font-medium">
                <li className="mb-3">• Department: QA & QC</li>
                <li className="mb-3">• Report to: QA Manager</li>
                <li className="mb-3">• Working hour: 08:30 - 17:30, Monday to Friday</li>
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

export default QAForm;