import axiosClient from "../axiosClient";
import { ProductsResponse } from "../dto/Response";

const API_PRODUCTS = "products";

const ProductsService = {
  findAll: async (current): Promise<ProductsResponse> => {
    try {
      return await axiosClient.get(`${API_PRODUCTS}?current=${current}`);
    } catch (e) {
      throw e;
    }
  },
};
export default ProductsService;
