import axiosClient from "../axiosClient";
import { Store } from "../dto/Response";
const API_STORE = "store";

const StoreService = {
  findByUserId: async (userID): Promise<Store> => {
    return await axiosClient.get(`${API_STORE}/user/${userID}`);
  },
  create: async (request: { userId; name; address }): Promise<Store> => {
    return await axiosClient.post(`${API_STORE}`, request);
  },
};

export default StoreService;
