import Moomoossi from "./Moomoossi"
import {Link} from 'react-router-dom'
import {MapPin} from 'lucide-react'

const MoomoossiPage = () => {
  return (
    <>
    {/* Banner */}
       <div className="w-full h-[500px] relative">
        <img src="/banner-mms.jpg" alt="Moomoossi Banner" className="w-full h-full object-cover" />
        <h1 className="absolute top-1/2 lg:left-1/8 left-1/2 text-white lg:text-5xl text-2xl font-bold bg-[#4482ff5f] lg:p-6 p-3 rounded-xl">MOOMOOSSI</h1>
       </div>

    <Moomoossi />

    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 mt-20 mb-10 mx-auto px-4 max-w-7xl">
        <img
              src='/pc_slider-section_mms.jpg'
              className="h-[320px] sm:h-[380px] md:h-[420px] w-full object-cover rounded-lg"
        />
        {/* Cột nội dung text */}
        <div className="flex flex-col justify-center">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#172b4d] leading-tight">
              Chào mừng bộ tứ đáng yêu đến TP. HCM
            </h2>

            <p className="text-lg leading-relaxed text-gray-600">
              `MOOMOOSSI chính thức “đổ bộ” với bộ sưu tập siêu đáng yêu dành riêng cho bạn tại 19 cửa hàng TP. HCM từ ngày ${new Date().getDay()}.`
            </p>

            <div>
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3.5 bg-[#07DEF5] hover:bg-[#05c4d9] transition-all duration-200 rounded-2xl font-bold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Tìm cửa hàng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MoomoossiPage