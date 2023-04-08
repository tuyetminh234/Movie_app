import { axiosRequest } from "configs/axios.config";
import { GROUP_ID } from "constants";

export const fetchUserListApi = () => {
  return axiosRequest({
    url: `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`,
    method: "GET",
  });
};

export const addUserApi = (data) => {
  return axiosRequest({
    url: `/QuanLyNguoiDung/ThemNguoiDung`,
    method: "POST",
    data: data,
  });
};

export const fetchUserTypeApi = () => {
  return axiosRequest({
    url: `/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`,
    method: "GET",
  });
};

export const editUserApi = (data) => {
  return axiosRequest({
    url: `/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
    method: "POST",
    data: data,
  });
};

export const fetchUserApi = (username) => {
  return axiosRequest({
    url: `/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${username}`,
    method: "POST",
    data: username,
  })
}

export const deleteUserApi = (username) => {
  return axiosRequest({
    url: `/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${username}`,
    method: "DELETE",
  });
};
