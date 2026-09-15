import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const bannerData = [
  {
    id: 1,
    image: "/ys-banner1.jpg",
    title: "YOUUS thay áo mới",
    description:
      "Từ ngày 8/7, loạt sản phẩm YOUUS mới bao bì mới đã ra mắt trên toàn hệ thống cửa hàng GS25, ghé cửa hàng gần nhất trải nghiệm ngay! ",
  },
  {
    id: 2,
    image: "/ys-banner2.jpg",
    title: `Loạt deal YOUUS mừng Hà Nội ${new Date().getFullYear() - 2025} tuổi`,
    description:
      "Ưu đãi áp dụng từ ngày 16/3, nhanh chân đến cửa hàng để tận hưởng ưu đãi siêu hấp dẫn.",
  },
];

const YouusBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return (prevIndex + 1) % bannerData.length;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentBanner = bannerData[currentIndex];

  return (
  <section className="mt-20 mb-10 mx-auto px-4 max-w-7xl">
    <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
      
      {/* Ảnh */}
      <div
        key={`image-${currentBanner.id}`}
        className="animate-fade-in"
      >
        <img
          src={currentBanner.image}
          alt={currentBanner.title}
          className="h-full w-full object-cover h-[360px] w-[650px] rounded-lg"
        />
      </div>

      {/* Text */}
      <div
        key={`text-${currentBanner.id}`}
        className="animate-fade-in"
      >
        <h2 className="text-3xl font-bold text-[#172b4d]">
          {currentBanner.title}
        </h2>

        <p className="mt-5 text-lg leading-relaxed text-gray-600">
          {currentBanner.description}
        </p>

        <Link to="/">
            <div className="mt-5 flex px-5 py-3 bg-[#07DEF5] rounded-2xl w-[180px] justify-center font-bold text-white">
                <MapPin className="mr-2" />
                Tìm cửa hàng
            </div>
        </Link>
      </div>

    </div>
  </section>
);
};

export default YouusBanner;