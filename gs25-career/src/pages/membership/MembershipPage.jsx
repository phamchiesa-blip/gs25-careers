import {MembershipIcon,  MemberShipDownload} from "../../features/Membership"

const MembershipPage = () => {
    return (
    <>
        {/* Banner */}
        <div className="w-full h-[500px]">
            <img src="/banner.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        {/* Icon & Introduce */}
        <MembershipIcon />

    {/* Content */}
    <div className="mx-auto max-w-7xl px-4 md:px-8">
            {/* title */}
            <h1 id='cstv' className="lg:text-6xl text-4xl font-bold text-center text-[#027CFF] mt-15">Chính sách thành viên và ứng dụng</h1>
            <h2 className="lg:text-xl text-lg font-bold text-center mt-[100px] mb-5">THỂ LỆ CHƯƠNG TRÌNH KHÁCH HÀNG THÀNH VIÊN GS 25 VN</h2>
        
            {/* <!-- Đối tượng áp dụng --> */}
            <section className="space-y-2">
            <h2 className="lg:text-2xl text-lg font-bold text-gray-900 mb-5">Đối tượng áp dụng</h2>
            <p>
                <strong className="font-bold">Chương Trình Khách Hàng Thành Viên GS 25 VN</strong> chỉ áp dụng cho cá nhân từ đủ 15 tuổi trở lên, là công dân Việt Nam hoặc người nước ngoài và không được dùng cho bất kỳ mục đích thương mại nào khác.
            </p>
            </section>

            {/* <!-- Hướng dẫn đăng ký thành viên --> */}
            <section className="space-y-2">
                <h2 className="lg:text-2xl text-lg font-bold text-gray-900 mb-5 mt-5">Hướng dẫn đăng ký thành viên</h2>
                <ul className="list-disc list-outside pl-5 space-y-2">
                    <li>
                        Khách hàng có thể đăng ký tham gia chương trình thông qua ứng dụng di động GS 25 VN (gọi tắt là <strong className="font-bold">“Ứng Dụng GS 25 VN”</strong>).
      </li>
      <li>
        Sau khi khách hàng điền đầy đủ các thông tin cá nhân liên quan (họ và tên, ngày sinh và số điện thoại), hệ thống sẽ cấp mã OTP thông qua số điện thoại. Khách hàng sau khi nhập mã OTP sẽ được cấp một (01) tài khoản với mã số thành viên GS 25 VN tương ứng.
      </li>
      <li>
        Mỗi khách hàng chỉ được sở hữu một mã số thành viên duy nhất.
      </li>
      <li>
        Thành viên có thể bắt đầu tích lũy điểm ngay sau khi đăng ký thành công.
      </li>
    </ul>
            </section>

  {/* <!-- Quy định tích lũy điểm --> */}
    <section class="space-y-3">
    <h2 class="font-bold text-gray-900 text-2xl mb-5 mt-5">Quy định tích lũy điểm, phân hạng thành viên và quyền lợi khách hàng</h2>

    {/* <!-- Cách tích điểm --> */}
    <div class="space-y-2">
      <h3 class="font-bold text-gray-900 text-2xl mb-5 mt-5">Cách tích điểm:</h3>
      <ul class="list-disc list-outside pl-5 space-y-2">
        <li>
          Khách hàng được tích lũy <strong class="font-bold">01 điểm cho mỗi 1.000 VNĐ</strong> chi tiêu tại hệ thống cửa hàng của Công ty TNHH GS 25 Vietnam (gọi tắt là “GS 25 Việt Nam”), bao gồm cửa hàng tiện lợi GS 25 và CAFE25.
        </li>
        <li>
          Số điểm tích lũy được tính trên tổng số tiền thanh toán cuối cùng trên hóa đơn, sau khi đã áp dụng các chương trình khuyến mại giảm giá trực tiếp (nếu có).
        </li>
        <li>
          Điểm sẽ được cộng vào tài khoản trong vòng 24 giờ kể từ thời điểm xuất hóa đơn.
        </li>
      </ul>
    </div>

    {/* <!-- Giá trị quy đổi --> */}
    <div class="space-y-2">
      <h3 class="font-bold text-gray-900 text-2xl mb-5 mt-5">Giá trị quy đổi:</h3>
      <p>
        Giá trị điểm tích lũy được quy đổi theo nguyên tắc: Tích lũy <strong class="font-bold">1000</strong> điểm tương đương <strong class="font-bold">10.000</strong> VNĐ (mười nghìn đồng Việt Nam).
      </p>
      <p>
        <strong class="font-bold">Cách thức quy đổi điểm:</strong> Khách hàng có thể quy đổi điểm bằng một trong các cách sau:
      </p>
      <ul class="list-disc list-outside pl-5 space-y-2">
        <li>
          Khách hàng có thể quy đổi điểm tích lũy trực tiếp tại hệ thống cửa hàng tiện lợi GS 25 và CAFE25.
        </li>
        <li>
          Khách hàng có thể tự đổi điểm tích lũy qua sản phẩm hàng hóa, voucher, quà tặng thông qua Ứng Dụng GS 25 VN.
        </li>
      </ul>
    </div>
    
    {/* Phân hạng TV */}
    <div id="qltv" class="space-y-2">
    <h3 class="font-bold text-gray-900 text-2xl mb-5 mt-5">Phân hạng thành viên:</h3>
      <ul class="list-disc list-outside pl-5 space-y-2">
        <li>
          <strong class="font-bold">Standard: </strong> Ngay sau khi đăng ký.
        </li>
        <li>
            <strong class="font-bold">Gold: </strong> Khi đạt tổng điểm tích lũy từ <strong class="font-bold">3.999  điểm</strong> trở lên.
        </li>
        <li>
            <strong class="font-bold">Platinum: </strong> Khi đạt tổng điểm tích lũy từ <strong class="font-bold">7.999 điểm</strong> điểm trở lên.
        </li>
      </ul>
    </div>
    </section>

    {/* Privilege */}
    <div class="text-gray-800 text-sm md:text-base leading-relaxed space-y-4">
    <p class="text-gray-700 mt-5 font-bold">
    Quyền lợi của từng hạng thành viên sẽ được áp dụng theo chính sách tương ứng tại từng thời điểm được ban hành kèm theo thể lệ này.
    </p>

    <h2 class="font-bold text-gray-900 text-2xl">
    Quyền lợi theo từng phân hạng thành viên (Áp dụng từ ngày 19/05/2026)
    </h2>

    <div class="overflow-x-auto">
    <table class="w-full border-collapse text-left">
      <thead>
        <tr class="border border-gray-200">
          <th class="py-3.5 px-4 font-bold text-gray-900 w-1/4">Quyền lợi</th>
          <th class="py-3.5 px-4 font-bold text-gray-900 w-1/4">Standard</th>
          <th class="py-3.5 px-4 font-bold text-gray-900 w-1/4">Gold</th>
          <th class="py-3.5 px-4 font-bold text-gray-900 w-1/4">Platinum</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100">
        <tr className="bg-[#FBFDFF] border border-gray-200">
          <td class="py-3.5 px-4 font-medium text-gray-800">Quà mở khóa hạng</td>
          <td class="py-3.5 px-4 text-gray-500"></td>
          <td class="py-3.5 px-4">E-voucher 50,000 VNĐ</td>
          <td class="py-3.5 px-4">E-voucher 100,000 VNĐ</td>
        </tr>

        <tr className="border border-gray-200">
          <td class="py-3.5 px-4 font-medium text-gray-800">
            Ngày đôi (DDAY: <span class="italic font-normal">5/5, 6/6, 7/7, 8/8, 9/9...</span>)
          </td>
          <td class="py-3.5 px-4 text-gray-500"></td>
          <td class="py-3.5 px-4">E -Voucher 15,000 VNĐ cho hóa đơn ≥100.000 VNĐ</td>
          <td class="py-3.5 px-4">E - Voucher 25,000 VNĐ cho hóa đơn ≥100.000 VNĐ</td>
        </tr>

        <tr className="bg-[#FBFDFF] border border-gray-200">
          <td class="py-3.5 px-4 font-medium text-gray-800">Ngày thành viên (25 hàng tháng)</td>
          <td class="py-3.5 px-4">Nhân 2 điểm cho hóa đơn đầu tiên</td>
          <td class="py-3.5 px-4">Nhân 3 điểm cho hóa đơn đầu tiên</td>
          <td class="py-3.5 px-4">Nhân 3 điểm cho hóa đơn đầu tiên</td>
        </tr>

        <tr className="border border-gray-200">
          <td class="py-3.5 px-4 font-medium text-gray-800">Quà sinh nhật</td>
          <td class="py-3.5 px-4">250 điểm</td>
          <td class="py-3.5 px-4">500 điểm</td>
          <td class="py-3.5 px-4">1000 điểm</td>
        </tr>

        <tr className="bg-[#FBFDFF] border border-gray-200">
          <td class="py-3.5 px-4 font-medium text-gray-800 align-top">Quà chi tiêu năm</td>
          <td class="py-3.5 px-4 text-gray-500 align-top"></td>
          <td class="py-3.5 px-4 align-top">
            <div>Chi tiêu 6 triệu VNĐ/năm</div>
            <div>Tặng E-voucher 50.000 VNĐ</div>
          </td>
          <td class="py-3.5 px-4 align-top">
            <div>Chi tiêu 10 triệu VNĐ/năm</div>
            <div>Tặng E-voucher 100.000 VNĐ</div>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    </div>

    {/* Ưu đãi đạt hạng */}
    <section className="space-y-2">
        <h2 className="lg:text-2xl text-lg font-bold text-gray-900 mb-5 mt-5">Ưu đãi khi đạt hạng (Tier Unlock Reward)</h2>
            <ul className="list-disc list-outside pl-5 space-y-2">
                <li>
                Khách hàng khi đạt hạng Gold sẽ được tặng 01 E-voucher trị giá 50.000 VNĐ.
                </li>
                <li>
                Khách hàng khi đạt hạng Platinum sẽ được tặng 01 E-voucher trị giá 100.000 VNĐ.
                </li>
            </ul>
        <p className="">Lưu ý: Quà tặng E-voucher được cấp vào tài khoản khách hàng trên ứng dụng GS25 VN tại mục Tủ Lạnh sau khi đủ điều kiện lên hạng và có thời hạn sử dụng theo quy định của từng chương trình.</p>
    </section>

    <section className="space-y-2">
        <h2 className="lg:text-2xl text-lg font-bold text-gray-900 mb-5 mt-5">Chương trình khuyến mại theo ngày đôi (DDAY)</h2>
        <p className="">Áp dụng vào các ngày khuyến mại định kỳ (ví dụ: 06/06, 07/07, 08/08, 09/09,...):</p>
            <ul className="list-disc list-outside pl-5 space-y-2">
                <li>
                Khách hàng hạng Gold được nhận 01 voucher trị giá 15.000 VNĐ khi phát sinh hóa đơn từ 100.000 VNĐ trở lên.
                </li>
                <li>
                Khách hàng hạng Platinum được nhận 01 voucher trị giá 25.000 VNĐ khi phát sinh hóa đơn từ 100.000 VNĐ trở lên.
                </li>
            </ul>
        <p className="">Lưu ý: Mỗi khách hàng được áp dụng ưu đãi 1 lần/ngày. Quà tặng E-voucher được cấp vào tài khoản khách hàng trên ứng dụng GS25 VN tại mục Tủ Lạnh sau khi đủ điều kiện lên hạng và có thời hạn sử dụng theo quy định của từng chương trình.</p>
    </section>

    <section id='udtv' className="space-y-2">
        <h2 className="lg:text-2xl text-lg font-bold text-gray-900 mb-5 mt-5">Ưu đãi ngày thành viên (Member Day)</h2>
        <p className="">Áp dụng cho hóa đơn đầu tiên vào ngày 25 hàng tháng:</p>
            <ul className="list-disc list-outside pl-5 space-y-2">
                <li>
                Hạng Standard: được nhân 02 lần số điểm thưởng.
                </li>
                <li>
                Hạng Gold và Platinum: được nhân 03 lần số điểm thưởng.
                </li>
            </ul>
        <p className="">Lưu ý: Điểm thưởng được cộng vào tài khoản thành trong vòng 24 giờ kể từ thời điểm xuất hóa đơn.</p>
    </section>

    {/* Gift */}
    <section className="space-y-2">
        <h2 className="lg:text-2xl text-lg font-bold text-gray-900 mb-5 mt-5">Quà tặng theo mức chi tiêu năm (Annual Spending Reward)</h2>
        <p className="">Áp dụng cho khách hàng đạt mức tổng chi tiêu tích lũy trong năm {new Date().getFullYear()} và được chi trả vào đầu năm {new Date().getFullYear() + 1}:</p>
            <ul className="list-disc list-outside pl-5 space-y-2">
                <li>
                Hạng Gold: <br />
Điều kiện: Tổng chi tiêu thực tế từ 6.000.000 VNĐ/năm trở lên <br />
Quà tặng: 01 E-voucher trị giá 50.000 VNĐ

                </li>
                <li>
                Hạng Platinum: <br />
Điều kiện: Tổng chi tiêu thực tế từ 10.000.000 VNĐ/năm trở lên <br />
Quà tặng: 01 E-voucher trị giá 100.000 VNĐ
                </li>
            </ul>
        <p className="">Lưu ý: Quà tặng E-voucher được cấp vào tài khoản khách hàng trên ứng dụng GS25 VN tại mục Tủ Lạnh sau khi đủ điều kiện lên hạng và có thời hạn sử dụng theo quy định của từng chương trình.</p>
    </section>

    {/* Rules */}
    <section className="space-y-2">
        <h2 className="lg:text-2xl text-lg font-bold text-gray-900 mb-5 mt-5">Quy định chung:</h2>
        <p className="">Quy định về quy đổi điểm và sử dụng voucher: </p>
            <ul className="list-disc list-outside pl-5 space-y-2">
                <li>
                Giá trị điểm tích lũy được quy đổi theo nguyên tắc: 1.000 điểm tương đương 10.000 VNĐ (bằng chữ: Mười nghìn đồng Việt Nam).
                </li>
                <li>
                Điểm tích lũy được sử dụng để thanh toán cho các giao dịch mua hàng tại hệ thống cửa hàng GS25 theo chính sách của Công ty tại từng thời điểm và không có giá trị quy đổi thành tiền mặt.
                </li>
                <li>
                Voucher/E-voucher được cấp cho khách hàng theo từng hạng thành viên hoặc theo các chương trình khuyến mại cụ thể, với giá trị tương ứng đã công bố.
                </li>
            </ul>

            <p className="">Voucher/E-voucher: </p>
            <ul className="list-disc list-outside pl-5 space-y-2">
                <li>
                Không được chuyển nhượng, không được quy đổi thành tiền mặt;
                </li>
                <li>
                Chỉ được sử dụng để thanh toán hàng hóa, dịch vụ tại hệ thống GS25;
                </li>
                <li>
                Có thời hạn sử dụng cụ thể và điều kiện áp dụng theo quy định của từng chương trình
                </li>
            </ul>
    </section>

    {/* Quy định điểm tích lũy */}
    <section className="space-y-2">
        <h2 className="lg:text-2xl text-lg font-bold text-gray-900 mb-5 mt-5">Các quy định liên quan đến điểm tích lũy</h2>
            <ul className="list-disc list-outside pl-5 space-y-2">
                <li>
                Không áp dụng tích điểm cho các mặt hàng bia trên 15 độ, rượu, thuốc lá hoặc các sản phẩm bị cấm khuyến mại theo pháp luật.
                </li>
                <li>
                Không áp dụng tích lũy điểm khi khách hàng mua thẻ mua sắm do Công ty TNHH GS 25 Vietnam phát hành. Điểm tích lũy sẽ được áp dụng khi khách hàng sử dụng thẻ mua sắm để mua sắm hàng hóa/dịch vụ tại hệ thống cửa hàng tiện lợi GS 25 và CAFE25 theo các điều khoản và điều kiện của thể lệ này.
                </li>
                <li>
                Không áp dụng tích điểm đối với trường hợp khách hàng sử dụng voucher do Công ty TNHH GS 25 Vietnam phát hành cho các đối tác để mua sắm hàng hóa/dịch vụ tại hệ thống cửa hàng tiện lợi GS 25 và CAFE25.
                </li>
                <li>
                Không áp dụng tích điểm đối với các hóa đơn mua hàng được hưởng chiết khấu theo thỏa thuận mua hàng với GS 25 Việt Nam hoặc theo các chính sách chiết khấu của GS 25 Việt Nam tại từng thời điểm.
                </li>
                <li>
                Điểm chưa sử dụng của năm trước sẽ tự động chuyển sang năm sau, nhưng chỉ có hiệu lực đến 15/01 năm kế tiếp.
                </li>
                <li>
                Trong trường hợp khách hàng sử dụng điểm tích lũy được quy đổi từ Chương Trình Khách Hàng Thành Viên GS 25 VN để thanh toán thì số tiền thanh toán từ điểm tích lũy sẽ không được tích lũy điểm.
                </li>
                <li>
                Nhân viên của GS 25 Việt Nam và của các bên nhận nhượng quyền không được sử dụng tài khoản cá nhân để tích điểm từ giao dịch của khách hàng.
                </li>
                <li>
                Khách hàng cần xuất trình mã số thành viên hoặc số điện thoại đăng ký tại thời điểm giao dịch để được tích điểm và hưởng quyền lợi.
                </li>
            </ul>
       
    </section>

    <section className="space-y-2">
        <h2 className="lg:text-2xl text-lg font-bold text-gray-900 mb-5 mt-5">Quyền của GS 25 Việt Nam</h2>
            <ul className="list-disc list-outside pl-5 space-y-2">
                <li>
                GS 25 Việt Nam có quyền từ chối, thu hồi hoặc hủy bỏ tư cách thành viên nếu phát hiện hành vi gian lận, lạm dụng chính sách, mua bán điểm hoặc các hành vi khác vì mục đích trục lợi.
                </li>
                <li>
                GS 25 Việt Nam có quyền thay đổi nội dung chương trình và điều khoản của chương trình vào bất kỳ thời điểm nào mà không cần phải có sự chấp thuận của khách hàng, miễn là GS 25 Việt Nam tuân thủ trình tự và thủ tục theo quy định của pháp luật liên quan.
                </li>
                <li>
                Trường hợp chấm dứt chương trình, GS 25 Việt Nam sẽ thông báo tới khách hàng thành viên trước ít nhất 03 (ba) ngày.
                </li>
            </ul>
       
    </section>

    <section className="space-y-2">
        <h2 className="lg:text-2xl text-lg font-bold text-gray-900 mb-5 mt-5">Quyền sử dụng thông tin</h2>
        <p className="">GS 25 Việt Nam được phép sử dụng thông tin khách hàng cung cấp để phục vụ các hoạt động truyền thông trực tiếp, thống kê và quản lý chương trình thành viên. 
            Mọi dữ liệu sẽ được bảo mật theo <strong className="font-bold">Chính sách bảo mật</strong> của GS 25 Việt Nam.</p>
    </section>

    <section className="space-y-2">
        <h2 className="lg:text-2xl text-lg font-bold text-gray-900 mb-5 mt-5">Miễn trừ trách nhiệm</h2>
            <ul className="list-disc list-outside pl-5 space-y-2">
                <li>
                GS 25 Việt Nam không chịu trách nhiệm nếu thông tin đăng ký không chính xác hoặc nếu khách hàng không nhận quyền lợi đúng thời hạn.
                </li>
                <li>
                GS 25 Việt Nam không chịu trách nhiệm với các lỗi kết nối, gián đoạn dịch vụ hoặc sự cố kỹ thuật khi sử dụng ứng dụng dẫn đến không ghi nhận tích điểm hoặc đổi điểm.
                </li>
            </ul>
    </section>
    {/* contact */}
    <section className="space-y-2">
        <h2 className="lg:text-2xl text-lg font-bold text-gray-900 mb-5 mt-5">Thông tin liên hệ</h2>
        <p className="">Nếu Người dùng có bất kỳ câu hỏi hoặc khiếu nại nào liên quan đến Chính sách của Chúng tôi, 
            hoặc muốn cập nhật, chỉnh sửa, xóa, hoặc phản đối xử lý Dữ liệu cá nhân, vui lòng liên hệ với Chúng tôi theo thông tin sau:</p>
        <h2 className="lg:text-xl text-lg font-bold text-gray-900 mb-5 mt-5">CÔNG TY TNHH GS 25 VIETNAM</h2>
        <ul className="list-disc list-outside pl-5 space-y-2">
                <li>
                Địa chỉ: 138-142 Hai Bà Trưng, Phường Sài Gòn, TP. Hồ Chí Minh (trước đây là 138-142 Hai Bà Trưng, Phường Đa Kao, Quận 1, TP. Hồ Chí Minh).
                </li>
                <li>
                Email: cskh@gs25.com.vn
                </li>
                <li>
                Số điện thoại: 028 7302 2525
                </li>
            </ul>
        
    </section>
    </div>

    <MemberShipDownload />

    </>
    )
}

export default MembershipPage