const NewsCard = ({ news }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("vi-VN");
  };

  return (
    <article className="group">

      {/* Image */}
      <div className="overflow-hidden rounded-2xl">
        <img
          src={news.image}
          alt={news.title}
          className="w-[415px] h-[415px] aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Title */}
      <h3 className="mt-4 text-xl font-bold text-blue-500">
        {news.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-gray-700 line-clamp-2">
        {news.description}
      </p>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">

        <span className="text-sm text-gray-600">
          📅 {formatDate(news.date)}
        </span>

        <button className="font-bold">
          Đọc tiếp →
        </button>

      </div>

    </article>
  );
};

export default NewsCard;