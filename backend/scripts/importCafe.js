import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import Product from "../models/Product.js";
import cafeProducts from "../data/cafeProducts.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Đọc file .env từ thư mục backend
dotenv.config({ path: path.join(__dirname, "../.env") });

const importCafeData = async () => {
  try {
    // 1. Kết nối MongoDB
    await connectDB();

    console.log(`Đã nạp ${cafeProducts.length} sản phẩm từ cafeProducts.js`);

    // 2. Chuẩn bị bulk operations với cơ chế upsert để tránh trùng lặp
    // TUYỆT ĐỐI không dùng deleteMany({}) để bảo tồn toàn bộ dữ liệu Food, Drink, Daily và các danh mục khác
    const bulkOps = cafeProducts.map((product) => ({
      updateOne: {
        filter: { name: product.name, category: "cafe" },
        update: {
          $set: {
            name: product.name,
            category: "cafe",
            subCategory: product.subCategory,
            image: product.image,
            sold: product.sold,
            isNew: product.isNew,
          },
        },
        upsert: true,
      },
    }));

    const result = await Product.bulkWrite(bulkOps);
    console.log("=== KẾT QUẢ IMPORT ===");
    console.log(`- upsertedCount (chèn mới): ${result.upsertedCount}`);
    console.log(`- matchedCount (khớp bản ghi cũ): ${result.matchedCount}`);
    console.log(`- modifiedCount (cập nhật): ${result.modifiedCount}`);

    // 3. Đếm số sản phẩm cafe hiện có trong MongoDB
    const totalCafe = await Product.countDocuments({ category: "cafe" });
    console.log(`- Số sản phẩm category = "cafe" hiện có trong MongoDB: ${totalCafe}`);

    // 4. Kiểm tra toàn vẹn các category khác
    const totalFood = await Product.countDocuments({ category: "food" });
    const totalDrink = await Product.countDocuments({ category: "drink" });
    const totalDaily = await Product.countDocuments({ category: "daily" });
    const totalAll = await Product.countDocuments();

    console.log("=== KIỂM TRA TOÀN VẸN CÁC CATEGORY KHÁC ===");
    console.log(`- Food count: ${totalFood} (giữ nguyên 60)`);
    console.log(`- Drink count: ${totalDrink} (giữ nguyên 25)`);
    console.log(`- Daily count: ${totalDaily} (giữ nguyên 9)`);
    console.log(`- Tổng tất cả sản phẩm trong database: ${totalAll}`);

    process.exit(0);
  } catch (error) {
    console.error("Lỗi khi import sản phẩm cafe:", error);
    process.exit(1);
  }
};

importCafeData();
