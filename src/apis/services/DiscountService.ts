import axiosClient from "../axiosClient";
import { Discount, DiscountResponse } from "../dto/Response";
const API_DISCOUNT = "discount";

const DiscountService = {
  findAll: async (current, pageSize): Promise<DiscountResponse> => {
    return await axiosClient.get(
      `${API_DISCOUNT}?current=${current}&pageSize=${pageSize}`
    );
  },
  findAllBySeller: async (sellerID): Promise<Discount[]> => {
    return await axiosClient.get(`${API_DISCOUNT}/seller/${sellerID}`);
  },
};

export default DiscountService;
