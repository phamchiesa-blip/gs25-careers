import { useState, useRef } from "react";
import { UploadCloud, CheckCircle2} from "lucide-react";
import IntroduceForm from './IntroduceForm'

const LMForm = () => {
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
        <IntroduceForm jobName={'Legal Manager'} time={"Toàn thời gian"} salary={"THỎA THUẬN"} type={"Legal"} />

        {/* Details */}
        <div className="max-w-6xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-2xl mb-4">
            <p className="mb-4 text-gray-500 font-semibold"><strong>The Legal Manager (Business Partnering)</strong> acts as the legal business partner for the assigned business area, providing proactive, business-oriented legal advice and managing legal risk end-to-end. The role partners with the business to enable objectives while protecting the Company, covering the full range of legal matters arising in the assigned area from advisory and contracting to regulatory change, dispute and inspection advisory, and stakeholder engagement.</p>
            <h1 className="text-xl text-red-400 mb-4 font-bold">I. MAIN ROLES & RESPONSIBILITIES:</h1>
            <ul className="text-[#226FA1] font-medium">
                <li className="mb-3"><strong>1. Business Advisory & Partnering.</strong> Serve as the legal point of contact for the assigned business area, including but not limited to providing day-to-day legal advice, supporting strategic initiatives, and advising on the legal implications of business decisions</li>
                <li className="mb-3"><strong>2. Commercial Contracting.</strong> Manage commercial contracting for the assigned area, including but not limited to drafting, reviewing and negotiating contracts, standardizing templates, and advising on contract risk mitigation</li>
                <li className="mb-3"><strong>3. Regulatory Change & Business-Impact Advisory.</strong> Monitor legal and regulatory changes relevant to the assigned area, interpret their business impact and advise the functions; provide domain input to the Legal Obligation Register</li>
                <li className="mb-3"><strong>4. Licensing & Permits Management.</strong> Manage the business licenses and regulatory permits required for the assigned business area, including but not limited to preparing and obtaining business and sub-licenses, renewing and maintaining their validity, and operating go-live/approval controls so that operations proceed only when the required licenses are in place</li>
                <li className="mb-3"><strong>5. Legal Risk Management.</strong> Identify and assess legal risks, propose mitigation measures with clear timelines, provide early alerts, escalate material risks, and track mitigation actions through to closure</li>
                <li className="mb-3"><strong>6. Dispute & Inspection Support.</strong> Provide business context and legal advice on disputes and inspections in the assigned area and partner on their resolution; feed root-cause lessons back into contracts and processes</li>
                <li className="mb-3"><strong>7. Legal Knowledge Management.</strong> Contribute domain content to the Legal knowledge-management system, and maintain practical guidance, precedents and playbooks for the assigned area</li>
                <li className="mb-3"><strong>8. Stakeholder Partnership.</strong> Build legal awareness across business teams; facilitate early legal involvement in projects; maintain clear stakeholder communication and end-to-end follow-through to resolution</li>
            </ul>

            <h1 className="text-xl text-red-400 mb-4 font-bold">II. REQUIREMENTS:</h1>
            <ul className="text-[#226FA1] font-medium">
                <li className="mb-3">• Bachelor of Legal</li>
                <li className="mb-3">• Holding a lawyer practicing certificate is an advantage</li>
                <li className="mb-3">• Minimum 8 years of experience in legal advisory, in-house legal or related roles</li>
                <li className="mb-3">• Strong knowledge of commercial and the laws relevant to the assigned business area</li>    
            </ul>

            <h1 className="text-xl text-red-400 mb-4 font-bold">Skills and Abilities</h1>
            <ul className="text-[#226FA1] font-medium">
                <li className="mb-3">• Business acumen & business-language communication: convey complex legal issues to non-legal stakeholders and partner effectively with the business</li>
                <li className="mb-3">• Commercial & risk judgment: balance legal protection with business objectives to enable informed, risk-based decisions</li>
                <li className="mb-3">• Negotiation & drafting skills</li>
                <li className="mb-3">• Stakeholder management & influencing skills</li>
                <li className="mb-3">• End-to-end follow-through and accountability</li>
                <li className="mb-3">• Strong analytical & problem-solving skills; attention to detail and well-organized</li>       
            </ul>

            <h1 className="text-xl text-red-400 mb-4 font-bold">Other characteristics</h1>
            <ul className="text-[#226FA1] font-medium">
                <li className="mb-3">• Hard working</li>
                <li className="mb-3">• Honest and careful</li>
                <li className="mb-3">• Logical and systematic thinking</li>
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

export default LMForm;