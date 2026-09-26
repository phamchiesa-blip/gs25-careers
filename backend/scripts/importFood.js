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

const importFoodData = async () => {
  try {
    // 1. Kết nối MongoDB
    await connectDB();

    // 2. Đọc dữ liệu từ foodProducts.json
    const dataPath = path.join(__dirname, "../data/foodProducts.json");
    const rawData = fs.readFileSync(dataPath, "utf-8");
    const foodProducts = JSON.parse(rawData);

    console.log(`Đã đọc ${foodProducts.length} sản phẩm từ foodProducts.json`);

    // 3. Chuẩn bị bulk operations với cơ chế upsert để tránh trùng lặp nếu chạy lại
    // Không dùng deleteMany để đảm bảo an toàn cho dữ liệu hiện có
    const bulkOps = foodProducts.map((item) => ({
      updateOne: {
        filter: { name: item.name, category: "food" },
        update: {
          $set: {
            name: item.name,
            category: "food",
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

    // 4. Kiểm tra số lượng sản phẩm category = "food"
    const totalFood = await Product.countDocuments({ category: "food" });
    console.log(`Tổng số sản phẩm có category = "food" trong MongoDB: ${totalFood}`);

    const totalProducts = await Product.countDocuments();
    console.log(`Tổng số tất cả sản phẩm trong database: ${totalProducts}`);

    process.exit(0);
  } catch (error) {
    console.error("Lỗi khi import sản phẩm:", error);
    process.exit(1);
  }
};

importFoodData();
