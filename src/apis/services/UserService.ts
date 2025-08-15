import axiosClient from "../axiosClient";
const API_USER = "account_service/user";

const UserService = {
  getAll: async () => {
    return await axiosClient.get(API_USER);
  },

  save: async (request) => {
    try {
      await axiosClient.post(API_USER, request);
      alert("Đăng kí thành công");
      return true;
    } catch (e: any) {
      if (e.code === 1002) {
        alert("Người dùng đã tồn tại");
      } else {
        ("Lỗi hệ thống");
      }
      return false;
    }
  },

  findById: async (userID) => {
    const data = await axiosClient.post(`${API_USER}/id=${userID}`);
    return data;
  },
  findByName: (name) => {
    return axiosClient.post(`${API_USER}/name=${name}`);
  },
  update: (userID, request) => {
    return axiosClient.put(`${API_USER}/${userID}`, request);
  },
  delete: (userID) => {
    return axiosClient.delete(`${API_USER}/${userID}`);
  },
};

export default UserService;
