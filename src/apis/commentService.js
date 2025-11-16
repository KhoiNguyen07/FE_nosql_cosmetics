import axiosClient from "./axiosClient";

const createNew = async (body) => {
  const result = await axiosClient.post("/reviews/create", body);
  return result;
};

const findAllCommentByProductId = async (id) => {
  const result = await axiosClient.get(`/reviews/product/${id}`);
  return result;
};

const findCommentsPaginated = async (id, page = 1, limit = 5) => {
  const result = await axiosClient.get(
    `/reviews/product/${id}/paginated?page=${page}&limit=${limit}`
  );
  return result;
};

const getReviewStats = async (id) => {
  const result = await axiosClient.get(`/reviews/stats/${id}`);
  return result;
};

const deleteComment = async (body) => {
  const result = await axiosClient.delete("/reviews/delete", {
    data: body
  });
  return result;
};

export const commentService = {
  createNew,
  findAllCommentByProductId,
  findCommentsPaginated,
  getReviewStats,
  deleteComment
};
