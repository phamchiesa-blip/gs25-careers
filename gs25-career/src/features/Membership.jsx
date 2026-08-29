import {IdCard, StarCheck, BadgePercent} from 'lucide-react'
import qrcode_apple from '../assets/qrcode_apps.png'
import qrcode_chplay from '../assets/qrcode_play.png'

export const MembershipIcon = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Introduce for membership */}
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-[100px] gap-4">
                <div className="flex flex-col text-center">
                <a href="#cstv"> <IdCard className='mx-auto h-30 w-30 mb-5 cursor-pointer hover:scale-105 transition duration-300 text-[#01D5EA]'/></a>
                <h1 className="lg:text-3xl text-xl font-bold text-[#007BFF] mb-5">Chương trình <br /> thành viên GS25</h1>
                <p className="font-semibold lg:text-xl text-lg">Khám phá hệ thống tích điểm và quyền lợi dành riêng cho thành viên GS25. Mua sắm càng nhiều
                - nhận ưu đãi càng hấp dẫn.</p>
                </div>

                <div className="flex flex-col text-center">
                <a href="#qltv"> <StarCheck className='mx-auto h-30 w-30 mb-5 cursor-pointer hover:scale-105 transition duration-300 text-[#FFA401]'/></a>
                <h1 className="lg:text-3xl text-xl font-bold text-[#007BFF] mb-5">Hạng thành viên <br /> & quyền lợi</h1>
                <p className="font-semibold lg:text-xl text-lg">Tìm hiểu các hạng thành viên và đặc quyền tương ứng. Nâng hạng mỗi năm để nhận thêm nhiều ưu đãi
                và quyền lợi độc quyền.</p>
                </div>

                <div className="flex flex-col text-center">
                <a href="#udtv"> <BadgePercent className="mx-auto h-30 w-30 mb-5 cursor-pointer hover:scale-105 transition duration-300 text-[#43B029]" /></a>
                <h1 className="lg:text-3xl text-xl font-bold text-[#007BFF] mb-5">Ưu đãi dành riêng <br /> cho thành viên</h1>
                <p className="font-semibold lg:text-xl text-lg">Cập nhật các chương trình
                khuyến mãi, tích điểm và ưu đãi
                đặc biệt chỉ dành cho
                thành viên GS25.</p>
                </div>
            </div>
        </div>
    )
}

export const MemberShipDownload = () => {
    return (
        <div className="flex flex-col py-16">
            <h1 className="text-8xl font-bold text-[#007BFF] text-center">Tải ứng dụng</h1>
            <div className="flex justify-center gap-4 mt-8">
                <div className="flex flex-col">
                <img src={qrcode_apple} alt="QR App Store" className="w-50 h-50" />
                <h1 className="text-center text-gray-500 text-xl font-bold">App Store</h1>
                </div>
                <div className="flex flex-col">
                <img src={qrcode_chplay} alt="QR Google Play" className="w-50 h-50" />
                <h1 className="text-center text-green-400 text-xl font-bold">Google Play</h1>
                </div>
            </div>
        </div>
    )
}