import axiosClient from "./axiosClient";

const getById = async (id) => {
  const result = await axiosClient.get(`/cosmetics/${id}`);
  return result;
};

const getAllProduct = async () => {
  const result = await axiosClient.get("/cosmetics");
  return result;
};

const searchProduct = async (body) => {
  const result = await axiosClient.post("/cosmetics/search", body);
  return result;
};

const getByCategory = async (category) => {
  const result = await axiosClient.get(`/cosmetics/category/${category}`);
  return result;
};

const getByBrand = async (brand) => {
  const result = await axiosClient.get(`/cosmetics/brand/${brand}`);
  return result;
};

const getByPriceRange = async (body) => {
  const result = await axiosClient.post("/cosmetics/price-range", body);
  return result;
};

const getFeaturedProducts = async () => {
  const result = await axiosClient.get("/cosmetics/featured");
  return result;
};

const getPopularProducts = async () => {
  const result = await axiosClient.get("/cosmetics/popular");
  return result;
};

const getAllCategories = async () => {
  const result = await axiosClient.get("/cosmetics/categories/all");
  return result;
};

const getAllBrands = async () => {
  const result = await axiosClient.get("/cosmetics/brands/all");
  return result;
};

export const productService = {
  getAllProduct,
  getById,
  searchProduct,
  getByCategory,
  getByBrand,
  getByPriceRange,
  getFeaturedProducts,
  getPopularProducts,
  getAllCategories,
  getAllBrands
};
