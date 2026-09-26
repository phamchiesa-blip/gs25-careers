import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      message: "Tạo sản phẩm thành công",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Không thể tạo sản phẩm",
      error: error.message,
    });
  }
};

export const getProducts = async (req, res) => {
    try {
    const { search, category } = req.query;

    const filter = {};

    if (search) {
      filter.name = {
        $regex: search,
        $options: "i",
      };
    }

    if(category) {
        filter.category = category;
    }

    const products = await Product.find(filter);

        res.status(200).json({message: "Lấy tất cả thành công", products});
    } catch(error) {
        res.status(500).json({
      message: "Không thể lấy danh sách sản phẩm",
      error: error.message,
    });
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
            message: "Không tìm thấy sản phẩm",
            });
        }

        res.status(200).json({message: "Lấy sp thành công", product});
    } catch(error) {
        res.status(500).json({
      message: "Không thể lấy danh sách sản phẩm",
      error: error.message,
    });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true, // Sau khi update, trả về sản phẩm đã được cập nhật.
        runValidators: true, // Bắt Mongoose kiểm tra dữ liệu mới theo ProductSchema.
      });

        if (!product) {
            return res.status(404).json({
            message: "Không tìm thấy sản phẩm",
            });
        }

        res.status(200).json({message: "Cập nhật sp thành công", product});
    } catch(error) {
        res.status(500).json({
      message: "Không thể cập nhật danh sách sản phẩm",
      error: error.message,
    });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id, req.body, {
        new: true, // Sau khi update, trả về sản phẩm đã được cập nhật.
        runValidators: true, // Bắt Mongoose kiểm tra dữ liệu mới theo ProductSchema.
      });

        if (!product) {
            return res.status(404).json({
            message: "Không tìm thấy sản phẩm",
            });
        }

        res.status(200).json({message: "Xóa sp thành công", product});
    } catch(error) {
        res.status(500).json({
      message: "Không thể xóa danh sách sản phẩm",
      error: error.message,
    });
    }
};