const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="flex items-center justify-center gap-3 mt-10">

      {/* Previous */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="w-10 h-10 text-xl disabled:opacity-30"
      >
        ←
      </button>

      {/* Page numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`
            w-10 h-10 rounded-xl font-bold
            transition-all duration-200

            ${
              currentPage === page
                ? "bg-blue-500 text-white shadow-md"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }
          `}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="w-10 h-10 text-xl disabled:opacity-30"
      >
        →
      </button>

    </div>
  );
};

export default Pagination;