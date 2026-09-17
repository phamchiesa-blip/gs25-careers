import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
const IntroduceForm = ({jobName, salary, time, type}) => {
  return (
    <>
    <div className="max-w-6xl mx-auto mb-3 flex justify-between">
                <Link to="/tuyen-dung">
                <div className="flex font-medium text-xl hover:text-white transition duration-200
                rounded-3xl py-2 w-[135px] bg-[#00BFDD] text-center justify-center">
                    <ArrowLeft className="mr-2 mt-1" />
                    TRỞ LẠI
                </div>
                </Link>
                <a href="#sm-form" className="text-xl font-medium hover:text-white transition duration-200
                rounded-3xl py-2 w-[130px] bg-[#00BFDD] text-center justify-center">ỨNG TUYỂN</a>
    </div>

    <div class="w-full max-w-6xl mx-auto p-4 mb-3">
 
    <div class="bg-[#2f6eb4] text-white rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-lg transition-all duration-300 hover:shadow-xl">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
      
      <div class="md:col-span-6 lg:col-span-6 flex flex-col justify-between">
        <div>
          <h2 class="text-xl md:text-2xl font-bold uppercase tracking-wide">
            {jobName}
          </h2>
          <p class="text-white/90 text-sm md:text-base mt-1 font-normal">
            {time}
          </p>
        </div>

        <div class="mt-6 md:mt-8 space-y-2 text-sm md:text-base text-white/95">
          <p>
            <span>Lương:</span> 
            <span class="font-bold text-white"> {salary}</span>
          </p>
          <p>
            <span class="text-white/90">Địa điểm:</span> Các cửa hàng GS25
          </p>
          <p>
            <span class="text-white/90">Phòng ban:</span> {type}
          </p>
          <p>
            <span class="text-white/90">Hạn nộp hồ sơ:</span> 02/01 — 31/12/{new Date().getFullYear()}
          </p>
        </div>
      </div>

      <div class="md:col-span-3 lg:col-span-3">
        <span class="text-sm md:text-base font-semibold uppercase tracking-wider block">
          KHỐI CỬA HÀNG
        </span>
      </div>

      <div class="md:col-span-3 lg:col-span-3 md:text-right">
        <span class="text-sm md:text-base font-semibold uppercase tracking-wider block">
          CÁC CỬA HÀNG GS25
        </span>
      </div>

    </div>
    </div>
    </div>
    </>
  )
}

export default IntroduceForm