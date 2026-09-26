import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import Product from "../models/Product.js";
import youusProducts from "../data/youusProducts.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Đọc file .env từ thư mục backend
dotenv.config({ path: path.join(__dirname, "../.env") });

const importYouusData = async () => {
  try {
    // 1. Kết nối MongoDB
    await connectDB();

    console.log(`Đã nạp ${youusProducts.length} sản phẩm từ youusProducts.js`);

    // 2. Chuẩn bị bulk operations với cơ chế upsert để tránh trùng lặp
    // TUYỆT ĐỐI không dùng deleteMany({}) để bảo tồn toàn bộ dữ liệu Food, Drink, Daily, Cafe và các danh mục khác
    const bulkOps = youusProducts.map((product) => ({
      updateOne: {
        filter: { name: product.name, category: "youus" },
        update: {
          $set: {
            name: product.name,
            category: "youus",
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
    console.log("=== KẾT QUẢ IMPORT YOUUS ===");
    console.log(`- upsertedCount (chèn mới): ${result.upsertedCount}`);
    console.log(`- matchedCount (khớp bản ghi cũ): ${result.matchedCount}`);
    console.log(`- modifiedCount (cập nhật): ${result.modifiedCount}`);

    // 3. Đếm số sản phẩm youus hiện có trong MongoDB
    const totalYouus = await Product.countDocuments({ category: "youus" });
    console.log(`- Số sản phẩm category = "youus" hiện có trong MongoDB: ${totalYouus}`);

    // 4. Kiểm tra toàn vẹn các category khác
    const totalFood = await Product.countDocuments({ category: "food" });
    const totalDrink = await Product.countDocuments({ category: "drink" });
    const totalDaily = await Product.countDocuments({ category: "daily" });
    const totalCafe = await Product.countDocuments({ category: "cafe" });
    const totalAll = await Product.countDocuments();

    console.log("=== KIỂM TRA TOÀN VẸN CÁC CATEGORY KHÁC ===");
    console.log(`- Food count: ${totalFood} (giữ nguyên 60)`);
    console.log(`- Drink count: ${totalDrink} (giữ nguyên 25)`);
    console.log(`- Daily count: ${totalDaily} (giữ nguyên 9)`);
    console.log(`- Cafe count: ${totalCafe} (giữ nguyên 14)`);
    console.log(`- Tổng tất cả sản phẩm trong database: ${totalAll}`);

    process.exit(0);
  } catch (error) {
    console.error("Lỗi khi import sản phẩm youus:", error);
    process.exit(1);
  }
};

importYouusData();
