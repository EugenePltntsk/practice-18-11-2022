import axios from "axios";

axios.defaults.baseURL = "https://62becfba0bc9b125615fd0f7.mockapi.io/api/";

export const getListOfProducts = async () => {
  const { data } = await axios.get("products");
  return data;
};

export const getDetailsOfProduct = async (id) => {
  const { data } = await axios.get(`/products/${id}`);
  return data;
};
