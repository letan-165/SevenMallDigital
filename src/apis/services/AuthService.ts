import axiosClient from "../axiosClient";

const API_AUTH = "auth";

const AuthService = {
  register: async (request) => {
    try {
      await axiosClient.post(`${API_AUTH}/register`, request);
      return true;
    } catch (e) {
      return false;
    }
  },
  login: async (request) => {
    try {
      await axiosClient.post(`${API_AUTH}/login`, request);
      return true;
    } catch (e) {
      return false;
    }
  },

  profile: async () => {
    try {
      return await axiosClient.get(`${API_AUTH}/profile`);
    } catch (e) {
      throw e;
    }
  },

  google: async () => {
    try {
      await axiosClient.post(`${API_AUTH}/google-login`);
      return true;
    } catch (e) {
      return false;
    }
  },
};
export default AuthService;
