import { useMemo, useState } from "react";
import { ChevronDown, Clock, MapPin } from "lucide-react";
import Pagination from "../../components/Pagination";
import { stores } from "../../data/stores";

const HomePage = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [searchCity, setSearchCity] = useState("");
  const [searchWard, setSearchWard] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;

  const cities = useMemo(() => {
    return [...new Set(stores.map((store) => store.city))];
  }, []);

  const wards = useMemo(() => {
    if (!selectedCity) return [];

    return [
      ...new Set(
        stores
          .filter((store) => store.city === selectedCity)
          .map((store) => store.ward)
      ),
    ];
  }, [selectedCity]);

  const filteredStores = useMemo(() => {
    return stores.filter((store) => {
      const cityMatched = !searchCity || store.city === searchCity;
      const wardMatched = !searchWard || store.ward === searchWard;

      return cityMatched && wardMatched;
    });
  }, [searchCity, searchWard]);

  const totalPages = Math.ceil(filteredStores.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStores = filteredStores.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setSelectedWard("");
  };

  const handleSearch = () => {
    setSearchCity(selectedCity);
    setSearchWard(selectedWard);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Banner */}
      <div className="w-full h-[500px] relative">
        <img src="/banner.jpg" alt="" className="w-full h-full object-cover" />
        <h1 className="absolute top-3/4 lg:left-1/8 left-1/2 text-white lg:text-5xl text-2xl font-bold bg-[#4482ffc9] lg:p-6 p-3 rounded-xl">Cửa hàng</h1>
      </div>

      <section className="mx-auto max-w-[1400px] px-5 py-14 md:px-8 lg:py-20">
        <h2 className="text-center text-3xl font-extrabold leading-tight text-[#002B4F] md:text-5xl">
          Khám phá hơn 400 cửa hàng của chúng tôi ở toàn quốc.
        </h2>

        <div className="mx-auto mt-12 flex max-w-4xl flex-col items-stretch justify-center gap-5 md:flex-row">
          <div className="relative flex-1">
            <select
              value={selectedCity}
              onChange={handleCityChange}
              className="h-[76px] w-full cursor-pointer appearance-none rounded-xl bg-[#55CADB] px-8 text-2xl font-extrabold text-white shadow-lg outline-none transition hover:bg-[#47bfd1]"
            >
              <option value="">Tỉnh/TP</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>

            <ChevronDown className="pointer-events-none absolute right-7 top-1/2 h-8 w-8 -translate-y-1/2 text-white" />
          </div>

          <div className="relative flex-1">
            <select
              value={selectedWard}
              onChange={(event) => setSelectedWard(event.target.value)}
              disabled={!selectedCity}
              className="h-[76px] w-full cursor-pointer appearance-none rounded-xl bg-[#55CADB] px-8 text-2xl font-extrabold text-white shadow-lg outline-none transition hover:bg-[#47bfd1] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <option value="">Phường/Xã</option>
              {wards.map((ward) => (
                <option key={ward} value={ward}>
                  {ward}
                </option>
              ))}
            </select>

            <ChevronDown className="pointer-events-none absolute right-7 top-1/2 h-8 w-8 -translate-y-1/2 text-white" />
          </div>

          <button
            type="button"
            onClick={handleSearch}
            className="h-[76px] rounded-xl bg-[#3D70FF] px-10 text-2xl font-extrabold text-white shadow-lg shadow-blue-200 transition hover:bg-[#265af2]"
          >
            Tìm
          </button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {currentStores.map((store) => (
            <article
              key={store.id}
              className="flex min-h-[560px] flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={store.image}
                  alt={store.name}
                  className="h-[250px] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <h3 className="mt-6 text-2xl font-extrabold text-[#3D70FF]">
                {store.name}
              </h3>

              <div className="mt-8 flex gap-4 text-[#172B4D]">
                <MapPin className="mt-1 h-7 w-7 shrink-0 text-[#3D70FF]" />
                <p className="text-lg font-bold leading-relaxed">
                  {store.address}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-4 text-[#172B4D]">
                <Clock className="h-7 w-7 text-[#3D70FF]" />
                <span className="text-lg font-bold">
                  {store.openingHours}
                </span>
              </div>

              <a
                href={store.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex h-[68px] items-center justify-center rounded-full bg-[#55CADB] text-2xl font-extrabold text-white shadow-lg shadow-cyan-100 transition hover:bg-[#47bfd1]"
              >
                Xem bản đồ
              </a>
            </article>
          ))}
        </div>

        {currentStores.length === 0 && (
          <p className="mt-12 text-center text-xl font-bold text-[#172B4D]">
           Chưa có cửa hàng ở khu vực này!
          </p>
        )}

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </section>
    </>
  );
};

export default HomePage;
