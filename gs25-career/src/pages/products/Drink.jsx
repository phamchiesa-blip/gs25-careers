import { useEffect, useState } from "react";
import YouusCard from "../brands/YouusCard";
import Pagination from "../../components/Pagination";
import {drink} from "../../data/products";

const Drink = () => {
  const [sortType, setSortType] = useState("az");
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  // =========================
  // FILTER + SORT
  // =========================

  let filteredProducts = [...drink];

  // Lọc theo danh mục
  if (category !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  // Sắp xếp
  if (sortType === "az") {
    filteredProducts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (sortType === "za") {
    filteredProducts.sort((a, b) =>
      b.name.localeCompare(a.name)
    );
  }

  if (sortType === "best") {
    filteredProducts.sort((a, b) => b.sold - a.sold);
  }

   if (sortType === "newest") {
    filteredProducts.sort(
      (a, b) => Number(b.isNew) - Number(a.isNew)
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
                  checked={category === "Cà phê"}
                  onChange={() => handleCategoryChange("Cà phê")}
                  className="h-4 w-4"
                />

                <span className="text-lg text-[#172b4d]">
                 Cà phê
                </span>
              </label>

              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="category"
                  checked={category === "Trà"}
                  onChange={() =>
                    handleCategoryChange("Trà")
                  }
                  className="h-4 w-4"
                />

                <span className="text-lg text-[#172b4d]">
                 Trà
                </span>
              </label>

              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="category"
                  checked={category === "Trà sữa"}
                  onChange={() =>
                    handleCategoryChange("Trà sữa")
                  }
                  className="h-4 w-4"
                />

                <span className="text-lg text-[#172b4d]">
                 Trà sữa
                </span>
              </label>

              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="radio"
                  name="category"
                  checked={category === "Khác"}
                  onChange={() =>
                    handleCategoryChange("Khác")
                  }
                  className="h-4 w-4"
                />

                <span className="text-lg text-[#172b4d]">
                  Các loại đồ uống khác
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

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
            {currentProducts.map((product) => (
              <YouusCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
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

export default Drink;