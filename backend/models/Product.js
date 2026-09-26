import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema(
    {
    name: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    subCategory: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: false,
    },

    sold: {
      type: Number,
      default: 0,
    },

    isNew: {
      type: Boolean,
      default: false,
    },

    image: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },
    },
    {
    timestamps: true,
    suppressReservedKeysWarning: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;