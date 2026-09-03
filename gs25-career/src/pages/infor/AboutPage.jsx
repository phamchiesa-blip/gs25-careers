import banner_about from '../../assets/banner_about.jpg'
import youus from '../../assets/youus.jpg'
import exclusive from '../../assets/exclusive.jpg'
import business_gs25_img_01 from '../../assets/business_gs25_img01.jpg'

const AboutPage = () => {
    return (
       <>
       <img src={banner_about} alt="" className="w-full h-[500px] object-cover" />
      <div className="bg-[#027CFF] w-full h-[200px] flex items-center justify-center">
        <p className='text-center mx-auto lg:px-30 md:px-10 px-5text-xl lg:text-3xl font-bold text-white'>GS25 Vietnam với tiêu chí “Friendly-Fresh-Fun” cam kết mang đến những sản phẩm và dịch vụ chất lượng cho người tiêu dùng Việt. Với các dòng sản phẩm nhập khẩu trực tiếp từ Hàn Quốc và các sản phẩm được sản xuất khép kín tại Việt Nam.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto max-w-7xl px-4 md:px-8 mt-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-[#027CFF] text-2xl font-bold">GS25 tự hào là đại diện tiêu biểu cho hệ thống cửa hàng tiện lợi của Hàn Quốc</h1>
          <p className="text-xl font-semibold mt-5 mb-5">Với phương châm 'Lifestyle Platform', GS25 không ngừng phát triển một nền tảng sống thường nhật, tối ưu mọi dịch vụ tiện ích và văn hóa ẩm thực. Chúng tôi tự hào mang đến trải nghiệm sống hiện đại, chất lượng, giữ vững vị thế cửa hàng tiện lợi được đông đảo mọi người yêu thích từ những ngày đầu tiên.</p>
          <img src={youus} alt="" className=" object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold text-[#027CFF]">Sự khác biệt thương hiệu qua sản phẩm độc quyền tại GS25</h1>
          <p className="text-xl font-semibold mt-5 mb-5">GS25 Việt Nam tự hào mang đến trải nghiệm mua sắm khác biệt với các mặt hàng độc quyền như dòng sản phẩm nhập khẩu YOUUS và bộ sưu tập chủ đề "MOOMOOSSI và những người bạn". Đồng thời, chúng tôi cam kết cung cấp thực phẩm chế biến tươi ngon, an toàn vệ sinh với mức giá hợp lý.</p>
          <img src={exclusive} alt="" className="object-cover" />
        </div>
      </div>

      <div className="bg-[#DAEBF8] w-full h-[540px]">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_5fr] mx-auto max-w-7xl px-4 md:px-8 mt-10 gap-5">
        <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold text-[#027CFF] mt-8">Hướng đến vị thế dẫn đầu tại Việt Nam</h1>
            <p className="text-xl font-semibold mt-5 mb-5">Với mục tiêu trở thành một trong những thương hiệu dẫn đầu trong lĩnh vực cửa hàng tiện lợi, GS25 không ngừng nỗ lực đáp ứng trọn vẹn nhu cầu khách hàng thông qua các sản phẩm chất lượng và dịch vụ. Chúng tôi hướng đến sự phát triển bền vững, kết hợp hài hòa giữa tăng trưởng kinh doanh và năng lực vận hành xuất sắc. Hơn thế nữa, GS25 luôn cam kết kiến tạo một môi trường làm việc lý tưởng, nơi mỗi nhân viên đều được truyền cảm hứng và tìm thấy niềm vui mỗi ngày.</p>
          </div>
          <div className="flex items-center justify-center">
            <img src={business_gs25_img_01} alt="" className=" object-cover rounded-2xl" />
          </div>
        </div>

        </div>
       </>
    )
}

export default AboutPage;