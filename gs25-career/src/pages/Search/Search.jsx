import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search as SearchIcon } from "lucide-react";
import { getProducts } from "../../api/productApi";
import YouusCard from "../brands/YouusCard";

export default function Search() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getProducts("", search);
        console.log("Search data:", data);
        setProducts(data?.products || []);
      } catch (error) {
        console.error("Lỗi khi tìm kiếm:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [search]);

  return (
    <section className="mx-auto max-w-[1400px] px-6 py-12">
      {/* Tiêu đề kết quả tìm kiếm */}
      <div className="border-b border-gray-200 pb-6 mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#172b4d]">
          {search ? (
            <>
              Kết quả tìm kiếm cho:{" "}
              <span className="text-[#0070ba]">&ldquo;{search}&rdquo;</span>
            </>
          ) : (
            "Tìm kiếm sản phẩm"
          )}
        </h1>

        {!loading && search && (
          <p className="mt-2 text-base sm:text-lg text-gray-600">
            Hiển thị{" "}
            <span className="font-semibold text-[#172b4d]">
              {products.length}
            </span>{" "}
            sản phẩm
          </p>
        )}
      </div>

      {/* Trạng thái Loading */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 text-gray-500">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-[#0070ba] mb-4"></div>
          <p className="text-base font-medium">Đang tìm kiếm sản phẩm...</p>
        </div>
      ) : products.length > 0 ? (
        /* Danh sách sản phẩm */
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <YouusCard
              key={product._id || product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        /* Trạng thái không tìm thấy sản phẩm */
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-gray-400 mb-4">
            <SearchIcon className="h-10 w-10" />
          </div>
          <h2 className="text-xl font-bold text-[#172b4d] mb-2">
            Không tìm thấy sản phẩm nào
          </h2>
          <p className="text-gray-500 max-w-md">
            {search
              ? `Rất tiếc, chúng tôi không tìm thấy kết quả phù hợp với từ khóa "${search}". Vui lòng thử lại với từ khóa khác.`
              : "Vui lòng nhập từ khóa trên thanh tìm kiếm để tra cứu sản phẩm."}
          </p>
        </div>
      )}
    </section>
  );
}