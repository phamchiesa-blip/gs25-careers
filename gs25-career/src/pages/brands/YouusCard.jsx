const YouusCard = ({ product }) => {
  return (
    <div className="group">
      {/* Ảnh sản phẩm */}
      <div className="aspect-square overflow-hidden rounded-2xl bg-[#b8f5f8] p-5">
        <div className="flex h-full items-center justify-center rounded-xl bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Tên sản phẩm */}
      <h3 className="mt-4 text-center text-lg font-bold leading-tight text-[#172b4d]">
        {product.name}
      </h3>
    </div>
  );
};

export default YouusCard;