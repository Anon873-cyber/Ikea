import api from "../api/axios";

const onDelete = async (id) => {
  const response = await api.put(`/cart/${id}?delete=true`);
  return response.data;
};

export default onDelete;