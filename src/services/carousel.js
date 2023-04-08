
import { axiosRequest } from "configs/axios.config";

export const fetchCarouselApi = (information) => {
  return axiosRequest({
    url: `/QuanLyPhim/LayDanhSachBanner`,
    method: "GET",
    data: information,
  });
};
