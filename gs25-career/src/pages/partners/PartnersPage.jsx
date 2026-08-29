import banner_partner from '../../assets/business_gs25_img01.jpg'
import nq from '../../assets/nq.jpeg'
import cost from '../../assets/cost.jpg'
import ht from '../../assets/ht.jpg'
import tc from '../../assets/tc.jpeg'
import mar from '../../assets/mar.jpg'

const PartnersPage = () => {
    return (
        <>
       {/* Banner */}
       <div className="relative w-full h-[500px]">
        <img src={banner_partner} alt="" className="w-full h-full object-cover" />
        <h1 className='absolute left-30 bottom-10 text-5xl font-bold bg-[#007bff78] text-white px-10 py-5 rounded-2xl shadow-2xl'>Nhượng quyền</h1>
       </div>

       {/* content */}
       <div className="mx-auto max-w-7xl px-4 md:px-8 mt-10 gap-2">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="">
                    <img src={nq} alt="" className='w-[100%] rounded-4xl' />
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-center text-4xl font-bold text-[#027CFF] mb-2">Nhượng quyền là gì và tại sao nên nhượng quyền?</h1>
                    <h1 className="text-center font-semibold text-xl">Nhượng quyền là một hoạt động thương mại, theo đó bên nhượng quyền sẽ trao quyền và hỗ trợ bên nhận nhượng quyền để bán hàng hóa, cung cấp dịch vụ theo nhãn hiệu, hệ thống hay là phương thức được xác định bởi bên nhượng quyền trong một khoảng thời gian và địa điểm nhất định.</h1>
                </div>

                <div className="flex flex-col justify-center">
                    <h1 className="text-center text-4xl font-bold text-[#027CFF] mb-2">Mô Hình Và Chi Phí Ban Đầu</h1>
                    <h1 className="text-center font-semibold text-xl">GS25 Việt Nam hiện đang vận hành hai mô hình nhượng quyền chiến lược. Chi phí đầu tư ban đầu được tối ưu hóa và minh bạch, bao gồm các hạng mục: phí gia nhập, phí nhượng quyền, phí thi công, hệ thống trang thiết bị và phí hàng hóa ban đầu.</h1>
                </div>
                <div className="">
                    <img src={cost} alt="" className='w-[100%] rounded-4xl' />
                </div>

                <div className="">
                    <img src={ht} alt="" className='w-[100%] rounded-4xl' />
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-center text-4xl font-bold text-[#027CFF] mb-2">Hệ Thống Và Quản Lý</h1>
                    <h1 className="text-center font-semibold text-xl">GS25 không chỉ nhượng quyền thương hiệu, chúng tôi đồng hành cùng sự thịnh vượng của bạn qua các chính sách hỗ trợ.</h1>
                </div>

                <div className="flex flex-col justify-center">
                    <h1 className="text-center text-4xl font-bold text-[#027CFF] mb-2">Câu chuyện thành công của GS25</h1>
                    <h1 className="text-center font-semibold text-xl">Mỗi cửa hàng là cầu nối cung cấp hàng hóa thiết yếu, dịch vụ tiện ích và là điểm dừng chân an toàn để khách hàng mua sắm, được phục vụ 24/7. Đó là lý do con số “25” trong GS25 ra đời: “24 giờ + 1 giờ tận tâm phục vụ = 25. Đây là bí quyết làm nên thành công của chúng tôi, đã đến lúc bắt đầu hành trình kinh doanh của riêng bạn ngay hôm nay.</h1>
                </div>
                <div className="">
                    <img src={tc} alt="" className='w-[100%] rounded-4xl' />
                </div>

                <div className="">
                    <img src={mar} alt="" className='w-[100%] rounded-4xl' />
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-center text-4xl font-bold text-[#027CFF] mb-2">Quảng cáo & truyền thông Marketing</h1>
                    <h1 className="text-center font-semibold text-xl">Bằng phương thức quảng cáo và truyền thông, GS25 ngày càng được biết đến và trở thành thương hiệu cửa hàng tiện lợi được khách hàng ưa chuộng. Trở thành đối tác nhượng quyền, bạn sẽ được hưởng lợi trực tiếp từ các chiến dịch quảng cáo và marketing thành công của GS25.</h1>
                </div>
            </div>
       </div>

       <div className="w-full h-[276px] bg-[#FFA300] mt-10">
            <h1 className="text-center font-bold text-4xl text-white pt-15">Nhượng quyền GS25 - Bắt đầu cửa hàng tiện lợi của riêng bạn!</h1>
            <div className="flex justify-center mt-10">
            <button className='cursor-pointer bg-white text-[#FFA300] h-[77px] w-[418px] rounded-2xl text-2xl font-bold active:scale-95 transition duration-200'>LIÊN HỆ HỢP TÁC NGAY</button>
            </div>
          
       </div>
        </>

        
    )
}

export default PartnersPage