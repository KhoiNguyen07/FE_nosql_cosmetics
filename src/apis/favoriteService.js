import axiosClient from "./axiosClient";

const createItem = async (body) => {
  const result = await axiosClient.post("/wishlist/add", body);
  return result;
};

const getAllFavorite = async (body) => {
  const result = await axiosClient.get(`/wishlist/user/${body.userId}`);
  return result;
};

const findOneByProductId = async (userId, productId) => {
  const result = await axiosClient.get(
    `/wishlist/check/${userId}/${productId}`
  );
  return result;
};

const findOneById = async (body) => {
  const result = await axiosClient.post("/wishlist/get-by-id", body);
  return result;
};

const deleteFavorite = async (body) => {
  console.log(body);
  const result = await axiosClient.delete("/wishlist/remove", {
    data: body
  });
  console.log(result);
  return result;
};

export const favoriteService = {
  createItem,
  getAllFavorite,
  deleteFavorite,
  findOneById,
  findOneByProductId
};
