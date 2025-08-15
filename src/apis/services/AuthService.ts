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

  google: async (code) => {
    await axiosClient.post(`/auth/google-login`, { code });
  },
};
export default AuthService;
