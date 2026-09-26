import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import Product from "../models/Product.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Đọc file .env từ thư mục backend
dotenv.config({ path: path.join(__dirname, "../.env") });

const importDrinkData = async () => {
  try {
    // 1. Kết nối MongoDB
    await connectDB();

    // 2. Đọc dữ liệu từ drinkProducts.json
    const dataPath = path.join(__dirname, "../data/drinkProducts.json");
    const rawData = fs.readFileSync(dataPath, "utf-8");
    const drinkProducts = JSON.parse(rawData);

    console.log(`Đã đọc ${drinkProducts.length} sản phẩm từ drinkProducts.json`);

    // 3. Chuẩn bị bulk operations với cơ chế upsert để tránh trùng lặp
    // TUYỆT ĐỐI không dùng deleteMany({}) để bảo tồn toàn bộ dữ liệu Food và các danh mục khác
    const bulkOps = drinkProducts.map((item) => ({
      updateOne: {
        filter: { name: item.name, category: "drink" },
        update: {
          $set: {
            name: item.name,
            category: "drink",
            subCategory: item.subCategory,
            image: item.image,
            sold: item.sold,
            isNew: item.isNew,
          },
        },
        upsert: true,
      },
    }));

    const result = await Product.bulkWrite(bulkOps);
    console.log("Kết quả import:");
    console.log(`- Số sản phẩm mới được chèn (upserted): ${result.upsertedCount}`);
    console.log(`- Số sản phẩm được cập nhật (matched/modified): ${result.matchedCount}`);

    // 4. Kiểm tra số lượng sản phẩm category = "drink"
    const totalDrink = await Product.countDocuments({ category: "drink" });
    console.log(`Tổng số sản phẩm có category = "drink" trong MongoDB: ${totalDrink}`);

    // 5. Kiểm tra duplicate theo { name, category: "drink" }
    const duplicates = await Product.aggregate([
      { $match: { category: "drink" } },
      { $group: { _id: "$name", count: { $sum: 1 } } },
      { $match: { count: { $gt: 1 } } },
    ]);
    console.log(`Số lượng tên sản phẩm bị duplicate trong category drink: ${duplicates.length}`);

    // 6. Kiểm tra lại toàn bộ sản phẩm trong database để đảm bảo an toàn
    const totalFood = await Product.countDocuments({ category: "food" });
    console.log(`Kiểm tra dữ liệu Food (phải giữ nguyên 60): ${totalFood}`);

    const totalAll = await Product.countDocuments();
    console.log(`Tổng số tất cả sản phẩm trong database: ${totalAll}`);

    process.exit(0);
  } catch (error) {
    console.error("Lỗi khi import sản phẩm drink:", error);
    process.exit(1);
  }
};

importDrinkData();
