import CountUpModule from 'react-countup';
import JobLists from './JobLists';

const CountUp = CountUpModule.default;

const JobHomePage = () => {
  return (
    <>
        {/* Banner */}
        <div className='bg-[#F0F0F0] w-full h-[700px]'>
            <div className="mx-auto lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-2">
                <div className="flex flex-col justify-center">
                    <h1 className="text-7xl font-extrabold text-center">BEST PLACE TO BUILD YOURSELF</h1>
                    <a href='#oppoturnity' className="w-[210px] h-[55px] mx-auto mt-[40px] mb-[40px]">
                        <button className="bg-black w-full h-full rounded-4xl text-white font-bold hover:bg-[#0071B9] transition duration-200 cursor-pointer">APPLY NOW</button>
                    </a>
                    <div className="flex justify-around text-center">
                        <div className="">
                            <p className='font-bold text-4xl'><CountUp start={0} end={300} duration={2} /> +</p>
                            <h1 className="flex justify-items-start text-gray-500">Store</h1>
                        </div>
                        <div className="">
                            <p className='font-bold text-4xl'><CountUp start={0} end={3000} duration={2} /> +</p>
                            <h1 className="flex justify-items-start text-gray-500">Employee</h1>
                        </div>
                        <div className="">
                            <p className='font-bold text-4xl'><CountUp start={0} end={30000} duration={2} /> +</p>
                            <h1 className="flex justify-items-start text-gray-500">Applications</h1>
                        </div>
                    </div>
                </div>
                <img src="/job-banner.png" alt="" className="h-[600px] object-cover mt-[5%]" />
            </div>
        </div>

        {/* Cơ hội nghề nghiệp tại GS25 */}
        <section className="mx-auto my-14 px-4 max-w-7xl" id="oppoturnity">
          <div className="bg-[#EEF2F6] rounded-[32px] p-8 md:p-14 shadow-sm">
            <h2 className="text-center text-2xl md:text-4xl font-extrabold text-[#2368A2] uppercase tracking-wide mb-10">
              CƠ HỘI NGHỀ NGHIỆP TẠI GS25
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
              {/* Khối Cửa Hàng */}
              <div className="bg-[#2E70B8] rounded-[24px] p-8 md:p-10 flex flex-col items-center justify-between text-center text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide mb-6">
                    KHỐI CỬA HÀNG
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-white/95">
                    Với hệ thống hơn 300 cửa hàng, GS25 Việt Nam đã phủ sóng khắp các tỉnh thành phía Nam: TP. Hồ Chí Minh, Đồng Nai, Bình Dương, Bà Rịa - Vũng Tàu, Tiền Giang, Cần Thơ. GS25 hứa hẹn sẽ đem đến cơ hội nghề nghiệp hấp dẫn cho các bạn trẻ
                  </p>
                </div>

                <a href='#store' className="mt-8">
                  <button className="px-8 py-3 bg-white text-[#2E70B8] font-bold rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer text-base">
                    Ứng tuyển ngay
                  </button>
                </a>
              </div>

              {/* Khối Văn Phòng */}
              <div className="bg-[#43B7D5] rounded-[24px] p-8 md:p-10 flex flex-col items-center justify-between text-center text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-wide mb-6">
                    KHỐI VĂN PHÒNG
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed text-white/95">
                    Với văn hóa 4F: Frendly - Fresh - Fun - Fair. GS25 Việt Nam mong muốn đem lại những cơ hội nghề nghiệp với mức đãi ngộ hấp dẫn dành cho những bạn trẻ đam mê với ngành bán lẻ, mong muốn trải nghiệm và đương đầu với thách thức
                  </p>
                </div>

                <a href='#office' className="mt-8">
                  <button className="px-8 py-3 bg-white text-[#43B7D5] font-bold rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:bg-cyan-50 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer text-base">
                    Ứng tuyển ngay
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Khối Cửa hàng */}
        <h2 id="store" className="text-center text-2xl md:text-4xl font-extrabold text-[#2368A2] uppercase tracking-wide mb-10 mt-[100px]">
            KHỐI CỬA HÀNG GS25
        </h2>
        <JobLists name={"CỬA HÀNG TRƯỞNG"} typeStaff={"Toàn thời gian"} typeJob={"KHỐI CỬA HÀNG"} />
        <JobLists name={"NHÂN VIÊN BÁN HÀNG"} typeStaff={"Toàn thời gian"} typeJob={"KHỐI CỬA HÀNG"} />
        <JobLists name={"NHÂN VIÊN BÁN HÀNG"} typeStaff={"Bán thời gian"} typeJob={"KHỐI CỬA HÀNG"} />
        
       
        {/* Khối Văn phòng */}
         {/* Khối Cửa hàng */}
        <h2 id="office" className="text-center text-2xl md:text-4xl font-extrabold text-[#2368A2] uppercase tracking-wide mb-10 mt-[100px]">
            KHỐI CỬA HÀNG GS25
        </h2>
        <JobLists name={"Legal Manager (Business Partnering)"} typeStaff={"Toàn thời gian"} typeJob={"Legal"} />
        <JobLists name={"QC Executive (Warehouse)"} typeStaff={"Toàn thời gian"} typeJob={"QA & QC"} />
        <JobLists name={"CỘNG TÁC VIÊN PART-TIME – MYSTERY SHOPPER (KHÁCH HÀNG BÍ MẬT)"} typeStaff={"Toàn thời gian"} typeJob={"QA & QC"} />
        <JobLists name={"I&C Admin Executive"} typeStaff={"Toàn thời gian"} typeJob={"Interior & Construction"} />
        <JobLists name={"PR Senior Executive"} typeStaff={"Toàn thời gian"} typeJob={"Marketing"} />
        <JobLists name={"Trade Marketing Executive"} typeStaff={"Toàn thời gian"} typeJob={"Marketing"} />
        <JobLists name={"Customer Service Senior Executive"} typeStaff={"Toàn thời gian"} typeJob={"Marketing"} />
        <JobLists name={"Merchandising Team Leader"} typeStaff={"Toàn thời gian"} typeJob={"Merchandise"} />
        <JobLists name={"Merchandising Manager"} typeStaff={"Toàn thời gian"} typeJob={"Merchandise"} />
        <JobLists name={"FF Sensory Executive"} typeStaff={"Toàn thời gian"} typeJob={"Merchandise"} />
        <JobLists name={"Real Estate Management Team Leader (REM)"} typeStaff={"Toàn thời gian"} typeJob={"Site Development"} />
        <JobLists name={"Accounts Payable Team Leader"} typeStaff={"Toàn thời gian"} typeJob={"Finance & Accountant"} />
        <JobLists name={"(Senior) Payable Accountant"} typeStaff={"Toàn thời gian"} typeJob={"Finance & Accountant"} />
        <JobLists name={"Business Analysis Manager"} typeStaff={"Toàn thời gian"} typeJob={"Finance & Accountant"} />
        <JobLists name={"Training Executive"} typeStaff={"Toàn thời gian"} typeJob={"HR"} />
        <JobLists name={"Korean Interpreter"} typeStaff={"Toàn thời gian"} typeJob={"HR"} />

        <br />
    </>
  )
}

export default JobHomePage