import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";

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
  const [isPaused, setIsPaused] = useState(false);

  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  // Chuyển banner sau mỗi 2 giây (tự động dừng khi hover vào)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Hiệu ứng GSAP chuyển cảnh mượt mà:
  // - Ảnh: Lướt từ bên phải sang (x: 80 -> 0)
  // - Text: Lướt từ dưới lên (y: 35 -> 0) có stagger cho từng dòng
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Ảnh lướt từ phải sang
      tl.fromTo(
        imageRef.current,
        { x: 80, opacity: 0, scale: 0.96 },
        { x: 0, opacity: 1, scale: 1, duration: 0.75, ease: "power3.out" },
        0
      );

      // Text lướt từ dưới lên theo thứ tự (tiêu đề -> mô tả -> nút bấm)
      if (textRef.current) {
        tl.fromTo(
          textRef.current.children,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, stagger: 0.1, ease: "power3.out" },
          0.05
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [currentIndex]);

  const currentBanner = bannerData[currentIndex];

  return (
    <section
      ref={containerRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="mt-20 mb-10 mx-auto px-4 max-w-7xl"
    >
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* Cột ảnh - overflow-hidden để animation trượt không tràn viền */}
        <div className="overflow-hidden rounded-2xl shadow-xl bg-gray-100">
          <div ref={imageRef} className="h-full w-full">
            <img
              src={currentBanner.image}
              alt={currentBanner.title}
              className="h-[320px] sm:h-[380px] md:h-[420px] w-full object-cover"
            />
          </div>
        </div>

        {/* Cột nội dung text */}
        <div className="flex flex-col justify-center">
          <div ref={textRef} className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#172b4d] leading-tight">
              {currentBanner.title}
            </h2>

            <p className="text-lg leading-relaxed text-gray-600">
              {currentBanner.description}
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

          {/* Indicators chấm tròn chuyển banner */}
          <div className="mt-8 flex items-center gap-2.5">
            {bannerData.map((banner, index) => (
              <button
                key={banner.id}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === index
                    ? "w-8 bg-[#07DEF5]"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Chuyển tới banner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouusBanner;