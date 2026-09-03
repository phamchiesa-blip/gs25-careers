import { useState } from "react";
import NewsCard from "../../components/NewsCard";
import Pagination from "../../components/Pagination";
import {newsData} from "../../data/news";

const NewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  // Tính tổng số trang
  const totalPages = Math.ceil(newsData.length / itemsPerPage);

  // Xác định vị trí bắt đầu và kết thúc của dữ liệu
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Lấy 6 tin tương ứng với trang hiện tại
  const currentNews = newsData.slice(startIndex, endIndex);

  // Khi chuyển trang
  const handlePageChange = (page) => {
    setCurrentPage(page);

    // Cuộn lên đầu phần tin tức
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full mx-auto max-w-7xl px-4 md:px-8 mt-10 mb-20">
      {/* Tiêu đề */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Tin tức
        </h1>

        <div className="mt-3 w-16 h-1 bg-green-500 rounded-full"></div>
      </div>

      {/* Danh sách tin tức */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentNews.map((news) => (
          <NewsCard
            key={news.id}
            news={news}
          />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default NewsPage;