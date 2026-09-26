import { useEffect, useState } from "react";
import YouusCard from "../brands/YouusCard";
import Pagination from "../../components/Pagination";
import { getProducts } from "../../api/productApi";

const Cafe = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [sortType, setSortType] = useState("az");
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  // =========================
  // FETCH PRODUCTS FROM API
  // =========================
  useEffect(() => {
    const fetchCafeProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts("cafe");
        setProducts(data.products || []);
        setError(null);
      } catch (err) {
        console.error("Lỗi khi tải sản phẩm CafeGS25:", err);
        setError("Không thể tải danh sách sản phẩm. Vui lòng thử lại sau.");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCafeProducts();
  }, []);

  // =========================
  // FILTER + SORT
  // =========================

  let filteredProducts = [...(products || [])];

  // Lọc theo danh mục con (subCategory)
  if (category !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => (product.subCategory || product.category) === category
    );
  }

  // Sắp xếp
  if (sortType === "az") {
    filteredProducts.sort((a, b) =>
      (a.name || "").localeCompare(b.name || "")
    );
  }

  if (sortType === "za") {
    filteredProducts.sort((a, b) =>
      (b.name || "").localeCompare(a.name || "")
    );
  }

  if (sortType === "best") {
    filteredProducts.sort((a, b) => (b.sold || 0) - (a.sold || 0));
  }

  if (sortType === "newest") {
    filteredProducts.sort(
      (a, b) => Number(b.isNew || false) - Number(a.isNew || false)
    );
  }

  // =========================
  // PAGINATION
  // =========================

  const totalPages = Math.ceil(
    filteredProducts.length / itemsPerPage
  );

  const startIndex =
    (currentPage - 1) * itemsPerPage;

  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // =========================
  // HANDLERS
  // =========================

  const handleSortChange = (value) => {
    setSortType(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);

    window.scrollTo({
      behavior: "smooth",
    });
  };

  // Nếu filter làm số trang giảm
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-12">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[270px_1fr]">

        {/* =========================
            SIDEBAR
        ========================= */}

        <aside>
          {/* Phân loại */}
          <div className="border-b border-gray-200 pb-6">
            <h2 className="mb-6 text-2xl font-bold text-[#172b4d]">
              Phân loại
            </h2>

            <div className="space-y-4">
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="sort"
                  value="az"
                  checked={sortType === "az"}
                  onChange={() => handleSortChange("az")}
                  className="h-4 w-4"
                />

                <span className="text-lg text-[#172b4d]">
                  Tên sản phẩm (A-Z)
                </span>
              </label>

              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="sort"
                  value="za"
                  checked={sortType === "za"}
                  onChange={() => handleSortChange("za")}
                  className="h-4 w-4"
                />

                <span className="text-lg text-[#172b4d]">
                  Tên sản phẩm (Z-A)
                </span>
              </label>

              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="sort"
                  value="best"
                  checked={sortType === "best"}
                  onChange={() => handleSortChange("best")}
                  className="h-4 w-4"
                />

                <span className="text-lg text-[#172b4d]">
                  Bán chạy
                </span>
              </label>

              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="sort"
                  value="newest"
                  checked={sortType === "newest"}
                  onChange={() => handleSortChange("newest")}
                  className="h-4 w-4"
                />

                <span className="text-lg text-[#172b4d]">
                  Mới nhất
                </span>
              </label>
            </div>
          </div>

          {/* Danh mục */}
          <div className="pt-6">
            <h2 className="mb-6 text-2xl font-bold text-[#172b4d]">
              Danh mục
            </h2>

            <div className="space-y-4">

             <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="category"
                  checked={category === "all"}
                  onChange={() => handleCategoryChange("all")}
                  className="h-4 w-4"
                />

                <span className="text-lg text-[#172b4d]">
                  Tất cả
                </span>
              </label>

              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="category"
                  checked={category === "Special"}
                  onChange={() => handleCategoryChange("Special")}
                  className="h-4 w-4"
                />

                <span className="text-lg text-[#172b4d]">
                 Special
                </span>
              </label>

              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="category"
                  checked={category === "Signature"}
                  onChange={() =>
                    handleCategoryChange("Signature")
                  }
                  className="h-4 w-4"
                />

                <span className="text-lg text-[#172b4d]">
                 Signature
                </span>
              </label>

              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="category"
                  checked={category === "Dessert"}
                  onChange={() =>
                    handleCategoryChange("Dessert")
                  }
                  className="h-4 w-4"
                />

                <span className="text-lg text-[#172b4d]">
                 Dessert
                </span>
              </label>
            </div>
          </div>
        </aside>

        {/* =========================
            PRODUCT LIST
        ========================= */}

        <div>
          <p className="mb-6 text-lg text-gray-600">
            Hiển thị{" "}
            <span className="font-semibold">
              {filteredProducts.length}
            </span>{" "}
            sản phẩm
          </p>

          {loading ? (
            <div className="flex items-center justify-center py-20 text-gray-500">
              <div className="mr-3 h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-[#0070ba]"></div>
              <span className="text-base font-medium">Đang tải sản phẩm...</span>
            </div>
          ) : error ? (
            <div className="py-12 text-center text-red-500">
              <p className="text-base font-medium">{error}</p>
            </div>
          ) : currentProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
              {currentProducts.map((product) => (
                <YouusCard
                  key={product._id || product.id}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-gray-500">
              <p className="text-base font-medium">Không tìm thấy sản phẩm nào trong danh mục này.</p>
            </div>
          )}

          {/* Pagination */}
          {!loading && totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Cafe;