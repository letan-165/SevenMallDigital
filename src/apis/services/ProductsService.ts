import axiosClient from "../axiosClient";
import { Product, ProductsResponse } from "../dto/Response";

const API_PRODUCTS = "products";

const ProductsService = {
  findAll: async (current): Promise<ProductsResponse> => {
    try {
      return await axiosClient.get(`${API_PRODUCTS}?current=${current}`);
    } catch (e) {
      throw e;
    }
  },
  findOne: async (productID): Promise<Product> => {
    try {
      return await axiosClient.get(`${API_PRODUCTS}/${productID}`);
    } catch (e) {
      throw e;
    }
  },
};
export default ProductsService;
